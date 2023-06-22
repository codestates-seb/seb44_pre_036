import { Link } from 'react-router-dom';
import { AuthorContainer } from '../style';
import { item } from '../type';
import { user } from '../../Board/type';

const Author = ({ item, user }: { item: item; user: user }) => {
  return (
    <AuthorContainer>
      <p>
        <span>Asked </span>
        <span>{item.date}</span>
      </p>
      <p>
        <img src={item.author.avatar} alt={item.author.name} />
        <Link to={`/mypage/${user.id}/${user.name}`}>
          <span>{item.author.name}</span>
        </Link>
      </p>
    </AuthorContainer>
  );
};

export default Author;
