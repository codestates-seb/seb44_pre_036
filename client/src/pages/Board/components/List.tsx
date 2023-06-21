import { ListContainer } from '../style';
import { data, user } from '../type';
import ListItem from './ListItem';

const List = ({ data, user }: { data: data; user: user }) => {
  return (
    <ListContainer>
      <ListItem data={data} user={user} />
    </ListContainer>
  );
};

export default List;
