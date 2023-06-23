import { Link } from 'react-router-dom';
import { AuthorContainer } from '../style';
import { IUserInfo } from '../../../common/model/UserInfo';
import { getItem } from '../../Board/type';

const Author = ({ item, user }: { item: getItem; user: IUserInfo }) => {
  return (
    <AuthorContainer>
      <p>
        <span>Asked </span>
        <span>{item?.createdAt}</span>
      </p>
      <p>
        <img src={item?.userAvatar} alt={item?.name} />
        <Link to={`/mypage/${user.memberId}/${user.name}`}>
          <span>{item?.name}</span>
        </Link>
      </p>
    </AuthorContainer>
  );
};

export default Author;
