import { IUserInfo } from '../../../common/model/UserInfo';
import { ListContainer } from '../style';
import { list } from '../type';
import ListItem from './ListItem';

const List = ({ data, user }: { data: list; user: IUserInfo }) => {
  return (
    <ListContainer>
      <ListItem data={data} user={user} />
    </ListContainer>
  );
};

export default List;
