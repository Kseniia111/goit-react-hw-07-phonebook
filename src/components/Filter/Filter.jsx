import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';
//import { selectFilter } from 'redux/selectors';
import css from './Filter.module.css';

const Filter = () => {
  //const value = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onChange = event => {
    const normalizedValue = event.target.value.toLowerCase();

    dispatch(changeFilter(normalizedValue));
  };

  return (
    <div>
      <label className={css.formLabel}>
        Find contacts by name
        <input
          className={css.formInput}
          type="text"
          name="filter"
          //value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

export default Filter;
