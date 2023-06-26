import { Link } from 'react-router-dom';
import { AuthorContainer } from '../style';
import { IUserInfo } from '../../../common/model/UserInfo';
import { getItem } from '../../../common/type';
import { ReactComponent as Profile } from '../../../common/assets/icons/Profile.svg';

const Author = ({ item, user }: { item: getItem; user: IUserInfo }) => {
  return (
    <AuthorContainer>
      <p>
        <span>Asked </span>
        <span>{item?.createdAt.slice(0, 10)}</span>
      </p>
      <p>
        <Profile />
        <Link to={`/mypage/${user.memberId}/${user.name}/profile`}>
          <span>{item?.name}</span>
        </Link>
      </p>
    </AuthorContainer>
  );
};

export default Author;
