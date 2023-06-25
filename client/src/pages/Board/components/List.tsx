import { IUserInfo } from '../../../common/model/UserInfo';
import { getItem } from '../../../common/type';
import { ListContainer } from '../style';
import ListItem from './ListItem';
import SideBar from './SideBar';

const List = ({ data, user }: { data: getItem[]; user: IUserInfo }) => {
  return (
    <ListContainer>
      <div>
        <ListItem data={data} user={user} />
        <SideBar />
      </div>
    </ListContainer>
  );
};

export default List;
