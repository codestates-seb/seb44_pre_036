import { getItem } from '../../Board/type';
import { BodyInputContainer } from '../style';
import Editor from './Editor';

const BodyInput = ({ item }: { item: getItem }) => {
  return (
    <BodyInputContainer>
      <h4>Body</h4>
      <Editor item={item} />
    </BodyInputContainer>
  );
};

export default BodyInput;
