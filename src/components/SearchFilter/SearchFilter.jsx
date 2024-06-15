
import css from './SearchFilter.module.css';
import PropTypes from 'prop-types';

export const SearchFilter = ({ filter, setFilter }) => {
  //filter name based on the the search keyword
  const handleFilterChange = e => {
    setFilter(e.target.value);
  };

  return (
    <div className={css.container}>
      <p>Find Contacts by Name</p>
      <input
        type="text"
        name="filter"
        placeholder="Search by name"
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  );
};

SearchFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};
