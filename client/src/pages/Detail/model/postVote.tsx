import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { VoteButton } from '../style';
import { ReactComponent as UpIcon } from '../../../common/assets/icons/VoteUp.svg';
import { ReactComponent as DownIcon } from '../../../common/assets/icons/VoteDown.svg';
import { LISTCRUD_URL } from '../../../common/utils/constants';
import { getItem } from '../../../common/type';
import { useSelector } from 'react-redux';
import { RootState } from '../../../common/store/RootStore';
import { useNavigate } from 'react-router-dom';
import useDecryptToken from '../../../common/utils/customHook/useDecryptToken';

export const VoteUp = ({ item }: { item: getItem }) => {
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
  const user = useSelector((state: RootState) => state.userInfo);

  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const voteDownMutation = useMutation(
    async () => {
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
    },
    {
      onSuccess: () => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (queryClient.setQueryData as any)(
          ['item', item.questionId],
          (prevData: { voteCount: number }) => ({
            ...prevData,
            voteCount: prevData.voteCount + 1,
          }),
        );
      },
    },
  );

  const handleVoteDown = () => {
    if (user.memberId) {
      voteDownMutation.mutate();
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
