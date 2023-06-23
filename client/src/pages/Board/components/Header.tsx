import { Link } from 'react-router-dom';
import { HeaderContainer } from '../style';
import { BlueButton } from '../../../common/style';
import FilterButtons from './FilterButtons';
import { IUserInfo } from '../../../common/model/UserInfo';
import { list } from '../../../common/type';

const Header = ({ data, user }: { data: list[]; user: IUserInfo }) => {
  return (
    <HeaderContainer>
      <section>
        <h2>All Questions</h2>
        <Link to={`/ask/${user.memberId}/${user.name}`}>
          <BlueButton>Ask Question</BlueButton>
        </Link>
      </section>
      <section>
        <p>{`${data?.length} questions`}</p>
        <FilterButtons />
      </section>
    </HeaderContainer>
  );
};

export default Header;
