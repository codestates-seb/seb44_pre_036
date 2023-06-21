import { item } from '../../Board/type';
import { TitleInputBox, TitleInputContainer } from '../style';

const TitleInput = ({ item }: { item: item }) => {
  return (
    <TitleInputContainer>
      <h4>Title</h4>
      <TitleInputBox type="text" defaultValue={item.title} />
    </TitleInputContainer>
  );
};

export default TitleInput;
