import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { VoteButton } from '../style';
import { ReactComponent as UpIcon } from '../../../common/assets/icons/VoteUp.svg';
import { ReactComponent as DownIcon } from '../../../common/assets/icons/VoteDown.svg';
import { LISTCRUD_URL } from '../../../common/utils/constants';
import { getItem } from '../../../common/type';

export const VoteUp = ({ item }: { item: getItem }) => {
  const queryClient = useQueryClient();

  const voteUpMutation = useMutation(
    async () => {
      const accessToken = localStorage.getItem('accessToken');

      const headers = {
        'ngrok-skip-browser-warning': 'true',
        Authorization: `Bearer ${accessToken}`,
      };

      await axios.patch(
        `${LISTCRUD_URL}/questions/vote/${item.questionId}?updown=up`,
        null,
        { headers },
      );
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

  const handleVoteUp = () => {
    voteUpMutation.mutate();
  };

  return (
    <VoteButton onClick={handleVoteUp}>
      <UpIcon />
    </VoteButton>
  );
};

export const VoteDown = ({ item }: { item: getItem }) => {
  const queryClient = useQueryClient();

  const voteDownMutation = useMutation(
    async () => {
      const accessToken = localStorage.getItem('accessToken');

      const headers = {
        'ngrok-skip-browser-warning': 'true',
        Authorization: `Bearer ${accessToken}`,
      };

      await axios.patch(
        `${LISTCRUD_URL}/questions/vote/${item.questionId}?updown=down`,
        null,
        { headers },
      );
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
    voteDownMutation.mutate();
  };

  return (
    <VoteButton onClick={handleVoteDown}>
      <DownIcon />
    </VoteButton>
  );
};
