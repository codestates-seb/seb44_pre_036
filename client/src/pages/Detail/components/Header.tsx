import { Link } from 'react-router-dom';
import { HeaderContainer } from '../style';
import { BlueButton } from '../../../common/style';
import { IUserInfo } from '../../../common/model/UserInfo';
import { getItem } from '../../../common/type';

const Header = ({ item, user }: { item: getItem; user: IUserInfo }) => {
  return (
    <HeaderContainer>
      <section>
        <h2>{item?.title}</h2>
        <p>
          <span>Asked </span>
          <span>{item?.createdAt.slice(0, 10)}</span>
          <span> Modified </span>
          <span>{item?.updatedAt.slice(0, 10)}</span>
          <span> Viewed </span>
          <span>{item?.viewCount}</span>
        </p>
      </section>
      <section>
        <Link
          to={user.memberId ? `/ask/${user.memberId}/${user.name}` : '/login'}
        >
          <BlueButton>Ask Question</BlueButton>
        </Link>
      </section>
    </HeaderContainer>
  );
};

export default Header;
