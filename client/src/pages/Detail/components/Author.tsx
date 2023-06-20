import { Link } from 'react-router-dom';
import { AuthorContainer } from '../style';
import { item } from '../type';

const Author = ({ item }: { item: item }) => {
  return (
    <AuthorContainer>
      <p>
        <span>Asked </span>
        <span>{item.date}</span>
      </p>
      <p>
        <img src={item.author.avatar} alt={item.author.name} />
        <Link to={`/mypage/${item.id}`}>
          <span>{item.author.name}</span>
        </Link>
      </p>
    </AuthorContainer>
  );
};

export default Author;
