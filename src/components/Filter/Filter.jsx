import PropTypes from 'prop-types';
import { FilterWrapper, FilterInput, FilterLabel } from './Filter.styled';

export const Filter = ({ handleFilter, value }) => (
  <FilterWrapper>
    <FilterLabel htmlFor="filter">
      Find contacts by name
      <FilterInput
        type="text"
        name="filter"
        onChange={handleFilter}
        value={value}
      />
    </FilterLabel>
  </FilterWrapper>
);

Filter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
  value: PropTypes.string,
};
