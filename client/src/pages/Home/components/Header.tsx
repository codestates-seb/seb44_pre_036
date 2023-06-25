import { Link } from 'react-router-dom';
import { HeaderContainer } from '../style';
import { BlueButton } from '../../../common/style';
import FilterButtons from './FilterButtons';
import { IUserInfo } from '../../../common/model/UserInfo';
import { pageInfo } from '../../../common/type';

const Header = ({
  pageInfo,
  user,
}: {
  pageInfo: pageInfo;
  user: IUserInfo;
}) => {
  console.log(pageInfo);
  return (
    <HeaderContainer>
      <section>
        <h2>Top Questions</h2>
        <Link to={`/ask/${user.memberId}/${user.name}`}>
          <BlueButton>Ask Question</BlueButton>
        </Link>
      </section>
      <section>
        <p>{`${
          pageInfo.totalElements ? pageInfo.totalElements : '0'
        } questions`}</p>
        <FilterButtons />
      </section>
    </HeaderContainer>
  );
};

export default Header;
