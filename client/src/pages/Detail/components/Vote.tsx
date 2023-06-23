import { VoteContainer } from '../style';
import { VoteDown, VoteUp } from '../model/postVote';
import { getItem } from '../../Board/type';

const Vote = ({ item }: { item: getItem }) => {
  return (
    <VoteContainer>
      <VoteUp item={item} />
      <p>{item?.voteCount}</p>
      <VoteDown item={item} />
    </VoteContainer>
  );
};

export default Vote;
