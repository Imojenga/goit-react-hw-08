import css from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectNameFilter } from '../../redux/filters/selectors';
import { changeFilter } from '../../redux/filters/slice';

export default function SearchBox() {
  const dispatch = useDispatch();
  const inputValue = useSelector(selectNameFilter);

  const handleSearch = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.search}>
      <label className={css.label}>Find contacts by name:</label>
      <input
        className={css.input}
        type="text"
        value={inputValue}
        onChange={handleSearch}
      />
    </div>
  );
}
