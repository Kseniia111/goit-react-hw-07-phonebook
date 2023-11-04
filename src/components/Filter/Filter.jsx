import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/FilterSlice';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  const onChange = event => {
    const normalizedValue = event.target.value.toLowerCase();

    dispatch(filterContact(normalizedValue));
  };

  return (
    <div>
      <label className={css.formLabel}>
        Find contacts by name
        <input
          className={css.formInput}
          type="text"
          name="filter"
          onChange={onChange}
        />
      </label>
    </div>
  );
};

export default Filter;
