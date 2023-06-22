import axios from 'axios';
import { QueryClient, useMutation } from 'react-query';
import { VoteButton } from '../style';
import { ReactComponent as UpIcon } from '../../../common/assets/icons/VoteUp.svg';
import { ReactComponent as DownIcon } from '../../../common/assets/icons/VoteDown.svg';
import { item } from '../type';

export const VoteUp = ({ item }: { item: item }) => {
  const queryClient = new QueryClient();

  const voteUpMutation = useMutation(async () => {
    try {
      const response = await axios.post('/api/post/vote', {
        //! api 입력
        id: window.location.pathname.split('/')[2],
        voteType: 'up',
      });

      const data = response.data;

      data.voteCount = item.voteCount + 1;

      queryClient.setQueryData(['item', item.id], data);
    } catch (err) {
      console.log(err);
    }
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

export const VoteDown = ({ item }: { item: item }) => {
  const queryClient = new QueryClient();

  const voteDownMutation = useMutation(async () => {
    try {
      const response = await axios.post('/api/post/vote', {
        id: window.location.pathname.split('/')[2],
        voteType: 'down',
      });

      const data = response.data;

      data.voteCount = item.voteCount - 1;

      queryClient.setQueryData(['item', item.id], data);
    } catch (err) {
      console.log(err);
    }
  });

  const handleVoteDown = () => {
    voteDownMutation.mutate();
  };

  return (
    <VoteButton onClick={handleVoteDown}>
      <DownIcon />
    </VoteButton>
  );
};
