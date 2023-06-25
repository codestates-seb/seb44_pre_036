import { IUserInfo } from '../../../common/model/UserInfo';
import { getItem } from '../../../common/type';
import { ListContainer } from '../style';
import ListItem from './ListItem';

const List = ({ data, user }: { data: getItem[]; user: IUserInfo }) => {
  return (
    <ListContainer>
      <ListItem data={data} user={user} />
    </ListContainer>
  );
};

export default List;
