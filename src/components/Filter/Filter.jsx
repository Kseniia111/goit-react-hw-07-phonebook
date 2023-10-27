import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/FilterSlice';
import { selectFilter } from 'redux/Selectors';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilterChange = filter => dispatch(setFilter(filter));
  const changeFilter = e => {
    handleFilterChange(e.currentTarget.value);
    console.log(filter);
  };

  return (
    <div>
      <label className={css.formLabel}>
        Find contacts by name
        <input
          className={css.formInput}
          type="text"
          value={filter}
          onChange={changeFilter}
        />
      </label>
    </div>
  );
};

export default Filter;
