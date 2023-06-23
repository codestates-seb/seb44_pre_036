import { Link } from 'react-router-dom';
import {
  AuthorSection,
  ContentSection,
  LeftSection,
  ListItemContainer,
  RightSection,
} from '../style';
import { list } from '../type';
import { IUserInfo } from '../../../common/model/UserInfo';

const ListItem = ({ data, user }: { data: list; user: IUserInfo }) => {
  return (
    <ul>
      {data.map((item) => {
        return (
          <ListItemContainer key={item.memberId}>
            <LeftSection>
              <div>votes</div>
              {/* {item.voteCount} 일단 삭제 */}
            </LeftSection>
            <RightSection>
              <ContentSection>
                <Link to={`/detail/${item.memberId}`}>
                  <div>{item.title}</div>
                </Link>
                <div>
                  {item.content.length > 199
                    ? `${item.content.slice(0, 199)}...`
                    : item.content}
                </div>
              </ContentSection>
              <AuthorSection>
                <Link to={`/mypage/${user.memberId}/${user.name}`}>
                  <img src={item.userAvatar} alt={item.name} />
                  <div>{item.name}</div>
                </Link>
                <div>asked {item.createdAt}</div>
              </AuthorSection>
            </RightSection>
          </ListItemContainer>
        );
      })}
    </ul>
  );
};

export default ListItem;
