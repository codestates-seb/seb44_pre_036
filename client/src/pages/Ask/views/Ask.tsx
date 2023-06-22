import { AskContainer, Page } from '../style';
import { BlueButton } from '../../../common/style';
import TitleInput from '../components/TitleInput';
import QuestionInput from '../components/QuestionInput';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../common/store/RootStore';
import {
  setDate,
  setUserAvatar,
  // setUserId,
  setUserName,
} from '../store/AskStore';
import { useEffect } from 'react';

const Ask = () => {
  const user = useSelector((state: RootState) => state.userInfo);

  const ask = useSelector((state: RootState) => state.ask);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDate(new Date().toLocaleDateString()));
    // dispatch(setUserId(user.id));
    dispatch(setUserName(user.name));
    dispatch(setUserAvatar(user.profileImageUrl));
  }, []);

  const handleSubmit = () => {
    console.log(ask);
  };

  return (
    <Page>
      <AskContainer>
        <h1>Ask a public question</h1>
        <TitleInput />
        <QuestionInput />
        <BlueButton onClick={() => handleSubmit()}>
          Post your question
        </BlueButton>
      </AskContainer>
    </Page>
  );
};

export default Ask;
