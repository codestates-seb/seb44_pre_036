import { Link } from 'react-router-dom';
import {
  AuthorSection,
  ContentSection,
  LeftSection,
  ListItemContainer,
  RightSection,
} from '../style';
import { data, user } from '../type';

const ListItem = ({ data, user }: { data: data; user: user }) => {
  return (
    <ul>
      {data.map((item) => {
        return (
          <ListItemContainer key={item.id}>
            <LeftSection>
              <div>{item.voteCount} votes</div>
            </LeftSection>
            <RightSection>
              <ContentSection>
                <Link to={`/detail/${item.id}`}>
                  <div>{item.title}</div>
                </Link>
                <div>
                  {item.question.length > 199
                    ? `${item.question.slice(0, 199)}...`
                    : item.question}
                </div>
              </ContentSection>
              <AuthorSection>
                <Link to={`/mypage/${user.id}/${user.name}`}>
                  <img src={item.author.avatar} alt={item.author.name} />
                  <div>{item.author.name}</div>
                </Link>
                <div>asked {item.date}</div>
              </AuthorSection>
            </RightSection>
          </ListItemContainer>
        );
      })}
    </ul>
  );
};

export default ListItem;
