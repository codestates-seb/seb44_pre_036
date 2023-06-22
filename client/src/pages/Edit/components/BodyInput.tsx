import { item } from '../../Board/type';
import { BodyInputContainer } from '../style';
import Editor from './Editor';

const BodyInput = ({ item }: { item: item }) => {
  return (
    <BodyInputContainer>
      <h4>Body</h4>
      <Editor item={item} />
    </BodyInputContainer>
  );
};

export default BodyInput;
