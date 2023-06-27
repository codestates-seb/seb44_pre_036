import axios from 'axios';
import { useMutation } from 'react-query';
import { VoteButton } from '../style';
import { ReactComponent as UpIcon } from '../../../common/assets/icons/VoteUp.svg';
import { ReactComponent as DownIcon } from '../../../common/assets/icons/VoteDown.svg';
import { LISTCRUD_URL } from '../../../common/utils/constants';
import { getItem } from '../../../common/type';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../common/store/RootStore';
import { useNavigate } from 'react-router-dom';
import useDecryptToken from '../../../common/utils/customHook/useDecryptToken';
import { setVoteCount } from '../store/voteCountStore';

export const VoteUp = ({ item }: { item: getItem }) => {
  const dispatch = useDispatch();

  const user = useSelector((state: RootState) => state.userInfo);

  const navigate = useNavigate();

  const voteUpMutation = useMutation(async () => {
    const decrypt = useDecryptToken();

    const encryptedToken = localStorage.getItem('accessToken');

    if (encryptedToken) {
      const accessToken = decrypt(encryptedToken);

      const headers = {
        Authorization: `Bearer ${accessToken}`,
      };

      await axios.patch(
        `${LISTCRUD_URL}/questions/vote`,
        {
          questionId: item.questionId,
          vote: true,
        },
        { headers },
      );
    }
  });

  const handleVoteUp = () => {
    if (user.memberId) {
      voteUpMutation.mutate();
      dispatch(setVoteCount((prevState: number) => prevState + 1));
      window.location.reload();
    } else {
      navigate('/login');
    }
  };

  return (
    <VoteButton onClick={handleVoteUp}>
      <UpIcon />
    </VoteButton>
  );
};

export const VoteDown = ({ item }: { item: getItem }) => {
  const dispatch = useDispatch();

  const user = useSelector((state: RootState) => state.userInfo);

  const navigate = useNavigate();

  const voteDownMutation = useMutation(async () => {
    const decrypt = useDecryptToken();

    const encryptedToken = localStorage.getItem('accessToken');

    if (encryptedToken) {
      const accessToken = decrypt(encryptedToken);

      const headers = {
        Authorization: `Bearer ${accessToken}`,
      };

      await axios.patch(
        `${LISTCRUD_URL}/questions/vote`,
        {
          questionId: item.questionId,
          vote: false,
        },
        { headers },
      );
    }
  });

  const handleVoteDown = () => {
    if (user.memberId) {
      voteDownMutation.mutate();
      dispatch(setVoteCount((prevState: number) => prevState - 1));
      window.location.reload();
    } else {
      navigate('/login');
    }
  };

  return (
    <VoteButton onClick={handleVoteDown}>
      <DownIcon />
    </VoteButton>
  );
};
