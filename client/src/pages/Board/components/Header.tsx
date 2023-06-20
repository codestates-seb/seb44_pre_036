import { Link } from 'react-router-dom';
import { HeaderContainer } from '../style';
import { data } from '../type';
import { BlueButton } from '../../../common/style';
import FilterButtons from './FilterButtons';

const Header = ({ data }: { data: data }) => {
  return (
    <HeaderContainer>
      <section>
        <h2>All Questions</h2>
        <Link to="/ask">
          <BlueButton>Ask Question</BlueButton>
        </Link>
      </section>
      <section>
        <p>{`${data.length} questions`}</p>
        <FilterButtons data={data} />
      </section>
    </HeaderContainer>
  );
};

export default Header;
