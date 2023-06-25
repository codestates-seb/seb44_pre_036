import { useDispatch, useSelector } from 'react-redux';
import { FilterContainer } from '../style';
import { RootState } from '../../../common/store/RootStore';
import { setFilter } from '../../../common/store/FilterStore';

const FilterButtons = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state: RootState) => state.filter);

  const handleFilterClick = (filter: string) => {
    dispatch(setFilter(filter));
  };

  return (
    <FilterContainer>
      <button
        className={currentFilter === 'Newest' ? 'current' : ''}
        onClick={() => handleFilterClick('Newest')}
      >
        Newest
      </button>
      <button
        className={currentFilter === 'View' ? 'current' : ''}
        onClick={() => handleFilterClick('View')}
      >
        View
      </button>
    </FilterContainer>
  );
};

export default FilterButtons;
