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
import { createUserInfo } from '../../../common/store/UserInfoStore';
import { useNavigate } from 'react-router-dom';

const Ask = () => {
  const user = useSelector((state: RootState) => state.userInfo);

  const ask = useSelector((state: RootState) => state.ask);

  const isButtonDisabled = ask.title.length < 10 || ask.content.length < 20;

  const askMutation = useMutation(postData);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setCreatedAt({ createdAt: new Date().toLocaleDateString() }));
    dispatch(setMemberId({ memberId: user.memberId }));
    dispatch(setName({ name: user.name }));
    dispatch(setUserAvatar({ userAvatar: user.profileImageUrl }));
  }, []);

  const handleSubmit = () => {
    if (user.memberId) {
      askMutation.mutate(ask);
      dispatch(
        createUserInfo({
          ...user,
          createdTime: new Date().toLocaleDateString(),
        }),
      );
    } else {
      navigate('/login');
    }
  };

  return (
    <Page>
      <AskContainer>
        <h1>Ask a public question</h1>
        <TitleInput />
        <QuestionInput />
        <BlueButton onClick={() => handleSubmit()} disabled={isButtonDisabled}>
          Post your question
        </BlueButton>
      </AskContainer>
    </Page>
  );
};

export default Ask;
