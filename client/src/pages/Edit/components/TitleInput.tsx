import { useDispatch } from 'react-redux';
import { getItem } from '../../Board/type';
import { TitleInputBox, TitleInputContainer } from '../style';
import { setTitle } from '../store/EditStore';

const TitleInput = ({ item }: { item: getItem }) => {
  const dispatch = useDispatch();

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setTitle({ title: event.target.value }));
  };

  return (
    <TitleInputContainer>
      <h4>Title</h4>
      <TitleInputBox
        type="text"
        defaultValue={item.title}
        onChange={handleTextChange}
      />
    </TitleInputContainer>
  );
};

export default TitleInput;
