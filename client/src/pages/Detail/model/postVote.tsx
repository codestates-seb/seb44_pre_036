import axios from 'axios';
import { QueryClient, useMutation } from 'react-query';
import { VoteButton } from '../style';
import { ReactComponent as UpIcon } from '../../../common/assets/icons/VoteUp.svg';
import { ReactComponent as DownIcon } from '../../../common/assets/icons/VoteDown.svg';
import { getItem } from '../../Board/type';
import { LISTCRUD_URL } from '../../../common/utils/enum';

interface PatchData {
  questionId: number;
  title: string;
  content: string;
}

export const VoteUp = ({ item }: { item: getItem }) => {
  const queryClient = new QueryClient();

  const voteUpMutation = useMutation(async () => {
    try {
      const patchData: PatchData = {
        questionId: item.questionId,
        title: item.title,
        content: item.content,
      };

      const response = await axios.patch(
        `${LISTCRUD_URL}/questions/edit/${item.questionId}`,
        patchData,
      );

      const data = response.data;

      data.voteCount = item.voteCount + 1;

      queryClient.setQueryData(['item', item.questionId], data);
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

export const VoteDown = ({ item }: { item: getItem }) => {
  const queryClient = new QueryClient();

  const voteDownMutation = useMutation(async () => {
    try {
      const patchData: PatchData = {
        questionId: item.questionId,
        title: item.title,
        content: item.content,
      };

      const response = await axios.patch(
        `${LISTCRUD_URL}/questions/edit/${item.questionId}`,
        patchData,
      );

      const data = response.data;

      data.voteCount = item.voteCount - 1;

      queryClient.setQueryData(['item', item.questionId], data);
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
