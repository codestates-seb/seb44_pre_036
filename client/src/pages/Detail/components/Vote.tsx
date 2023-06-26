import { VoteContainer } from '../style';
import { VoteDown, VoteUp } from '../model/postVote';
import { getItem } from '../../../common/type';
import { useSelector } from 'react-redux';
import { RootState } from '../../../common/store/RootStore';

const Vote = ({ item }: { item: getItem }) => {
  const voteCount = useSelector((state: RootState) => state.voteCount);

  return (
    <VoteContainer>
      <VoteUp item={item} />
      <p>{voteCount}</p>
      <VoteDown item={item} />
    </VoteContainer>
  );
};

export default Vote;
