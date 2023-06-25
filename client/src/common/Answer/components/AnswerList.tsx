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
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAnswer } from '../store/AnswerStore';
import { RootState } from '../../store/RootStore';

function AnswerList() {
  const { id = '' } = useParams();
  const [count, setCount] = useState(0);

  const { data: answerList } = GetMutation(id);
  const dispatch = useDispatch();
  const Answerlength = useSelector((state: RootState) => state.item);

  useEffect(() => {
    dispatch(getAnswer(answerList));
  }, [answerList]);

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
          {answerList === null ? (
            <h2>Answer</h2>
          ) : (
            <h2>{Answerlength.answers.length} Answer</h2>
          )}
        </Item>
        {Answerlength.answers.length ? null : (
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
          <AnswerContentIn>{answerList.content}</AnswerContentIn>
        </AnswerContent>
      </AnswerContainer>
    </div>
  );
}

export default AnswerList;
