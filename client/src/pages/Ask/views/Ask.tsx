import { AskContainer, Page } from '../style';
import { BlueButton } from '../../../common/style';
import TitleInput from '../components/TitleInput';
import QuestionInput from '../components/QuestionInput';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../common/store/RootStore';
import {
  setCreatedAt,
  setMemberId,
  setName,
  setUserAvatar,
} from '../store/AskStore';
import { useEffect } from 'react';
import { postData } from '../model/postData';
import { useMutation } from 'react-query';

const Ask = () => {
  const user = useSelector((state: RootState) => state.userInfo);

  const ask = useSelector((state: RootState) => state.ask);

  const askMutation = useMutation(postData);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCreatedAt({ createdAt: new Date().toLocaleDateString() }));
    dispatch(setMemberId({ memberId: user.memberId }));
    dispatch(setName({ name: user.name }));
    dispatch(setUserAvatar({ userAvatar: user.profileImageUrl }));
  }, []);

  const handleSubmit = () => {
    console.log(ask);
    askMutation.mutate(ask);
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
