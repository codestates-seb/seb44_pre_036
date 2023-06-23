import { BlueButton } from '../../../common/style';
import { PaginationContainer } from '../style';

const Pagination = ({
  handleNextPage,
  handlePrevPage,
}: {
  handleNextPage: () => void;
  handlePrevPage: () => void;
}) => {
  return (
    <PaginationContainer>
      <BlueButton onClick={handlePrevPage}>Prev</BlueButton>
      <BlueButton onClick={handleNextPage}>Next</BlueButton>
    </PaginationContainer>
  );
};

export default Pagination;
