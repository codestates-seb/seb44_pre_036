import { Link } from 'react-router-dom';
import { HeaderContainer } from '../style';
import { data, user } from '../type';
import { BlueButton } from '../../../common/style';
import FilterButtons from './FilterButtons';

const Header = ({ data, user }: { data: data; user: user }) => {
  return (
    <HeaderContainer>
      <section>
        <h2>All Questions</h2>
        <Link to={`/ask/${user.id}/${user.name}`}>
          <BlueButton>Ask Question</BlueButton>
        </Link>
      </section>
      <section>
        <p>{`${data.length} questions`}</p>
        <FilterButtons />
      </section>
    </HeaderContainer>
  );
};

export default Header;
