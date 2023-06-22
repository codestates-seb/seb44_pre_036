import { TextWrapper3 } from '../../SignUp/style';
import { Text } from '../../../common/style';

function TextContainer({ content }: { content: string }) {
  return (
    <TextWrapper3>
      <Text>{content}</Text>
    </TextWrapper3>
  );
}
export default TextContainer;
