import { useDispatch, useSelector } from 'react-redux';
import { FilterContainer } from '../style';
import { data } from '../type';
import { setFilter } from '../store/FilterStore';
import { RootState } from '../../../common/store/RootStore';

const FilterButtons = ({ data }: { data: data }) => {
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
        className={currentFilter === 'Highest score' ? 'current' : ''}
        onClick={() => handleFilterClick('Highest score')}
      >
        Highest score
      </button>
    </FilterContainer>
  );
};

export default FilterButtons;
