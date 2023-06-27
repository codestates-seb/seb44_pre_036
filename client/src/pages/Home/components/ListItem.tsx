import { Link } from 'react-router-dom';
import {
  AuthorSection,
  ContentSection,
  LeftSection,
  ListItemContainer,
  RightSection,
} from '../style';
import { IUserInfo } from '../../../common/model/UserInfo';
import { ReactComponent as Profile } from '../../../common/assets/icons/Profile.svg';
import { getItem } from '../../../common/type';

const ListItem = ({ data, user }: { data: getItem[]; user: IUserInfo }) => {
  return (
    <ul>
      {data &&
        data.map((item) => {
          return (
            <ListItemContainer key={item.questionId}>
              <LeftSection>
                <div>{`${item.voteCount} votes`}</div>
                <div>{`${item.answers?.length || 0} answers`}</div>
                <div>{`${item.viewCount} viewed`}</div>
              </LeftSection>
              <RightSection>
                <ContentSection>
                  <Link to={`/detail/${item.questionId}`}>
                    <div>{item.title}</div>
                  </Link>
                  <div>
                    {item.content.replace(/<[^>]+>/g, '').length > 80
                      ? `${item.content
                          .replace(/<[^>]+>/g, '')
                          .slice(0, 80)}...`
                      : item.content.replace(/<[^>]+>/g, '')}
                  </div>
                </ContentSection>
                <AuthorSection>
                  <Link to={`/mypage/${user.memberId}/${user.name}/profile`}>
                    <Profile />
                    <div>{item.name}</div>
                  </Link>
                  <div>asked {item.createdAt.slice(0, 10)}</div>
                </AuthorSection>
              </RightSection>
            </ListItemContainer>
          );
        })}
    </ul>
  );
};

export default ListItem;
