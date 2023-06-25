import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { VoteButton } from '../style';
import { ReactComponent as UpIcon } from '../../../common/assets/icons/VoteUp.svg';
import { ReactComponent as DownIcon } from '../../../common/assets/icons/VoteDown.svg';
import { LISTCRUD_URL } from '../../../common/utils/constants';
import { getItem } from '../../../common/type';

export const VoteUp = ({ item }: { item: getItem }) => {
  const voteUpMutation = useMutation(async () => {
    // const accessToken = localStorage.getItem('accessToken');

    const accessToken =
      'eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6WyJVU0VSIl0sImVtYWlsIjoicG90YXRvQG5hdmVyLmNvbSIsIm1lbWJlcklkIjoyLCJzdWIiOiJwb3RhdG9AbmF2ZXIuY29tIiwiaWF0IjoxNjg3NjU1NjE3LCJleHAiOjE2ODc2NTgwMTd9.NUBf36NbM05Xejr-_b7oTwQDRem5ilgHKtVTGdNHKTU';

    const headers = {
      'ngrok-skip-browser-warning': 'true',
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
  });

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
      // const accessToken = localStorage.getItem('accessToken');

      const accessToken =
        'eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6WyJVU0VSIl0sImVtYWlsIjoicG90YXRvQG5hdmVyLmNvbSIsIm1lbWJlcklkIjoyLCJzdWIiOiJwb3RhdG9AbmF2ZXIuY29tIiwiaWF0IjoxNjg3NjU1NjE3LCJleHAiOjE2ODc2NTgwMTd9.NUBf36NbM05Xejr-_b7oTwQDRem5ilgHKtVTGdNHKTU';

      const headers = {
        'ngrok-skip-browser-warning': 'true',
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
