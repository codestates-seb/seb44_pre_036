import { useEffect } from 'react';
import { GetMutation } from '../queries';
import { useState } from 'react';
import {
  Header,
  Item,
  Item2,
  Select,
  AnswerContainer,
  AnswerVote,
  AnswerVoteIn,
  Circle,
  Count,
  AnswerContent,
  AnswerContentIn,
} from '../styles';
import { Listdata } from '../model/type';

function AnswerList({ data, length }: Listdata) {
  const { data: answerList } = GetMutation('1');
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(answerList);
  }, answerList);
  const UpCount = () => {
    setCount(count + 1);
  };
  const DownCount = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <Header>
        <Item>
          {data === null ? <h2>Answer</h2> : <h2>{length} Answer</h2>}
        </Item>
        {length ? null : (
          <Item2>
            <label>Sorted by:</label>
            <Select>
              <option>Highest scroe (default)</option>
              <option>Trending (recent votes count more)</option>
              <option>Date modified (newest first)</option>
              <option>Date created (oldest first)</option>
            </Select>
          </Item2>
        )}
      </Header>
      <AnswerContainer>
        <AnswerVote>
          <AnswerVoteIn>
            <Circle onClick={UpCount}>
              <img src="/answer_svg/up.svg/" alt="up" />
            </Circle>
            <Count>{count}</Count>
            <Circle onClick={DownCount}>
              <img src="/answer_svg/down.svg/" alt="up" />
            </Circle>
          </AnswerVoteIn>
        </AnswerVote>
        <AnswerContent>
          <AnswerContentIn>{data[0].content}</AnswerContentIn>
        </AnswerContent>
      </AnswerContainer>
    </div>
  );
}

export default AnswerList;
