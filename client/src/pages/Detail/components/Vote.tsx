import { VoteContainer } from '../style';
import { item } from '../type';
import { VoteDown, VoteUp } from '../model/Vote';

const Vote = ({ item }: { item: item }) => {
  return (
    <VoteContainer>
      <VoteUp item={item} />
      <p>{item.voteCount}</p>
      <VoteDown item={item} />
    </VoteContainer>
  );
};

export default Vote;
