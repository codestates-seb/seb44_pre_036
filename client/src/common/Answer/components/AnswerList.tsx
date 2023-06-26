import { useEffect } from 'react';
import { GetMutation, DeleteMutation, PatchMutation } from '../queries';
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
import { AnswerData } from '../model/type';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAnswer } from '../store/AnswerStore';
import { RootState } from '../../store/RootStore';

function AnswerList() {
  const { id = '' } = useParams();
  const [count, setCount] = useState(0);

  const { data: answerList } = GetMutation(id);
  const dispatch = useDispatch();
  const Question = useSelector((state: RootState) => state.item);
  console.log(Question);

  useEffect(() => {
    dispatch(getAnswer(answerList));
  }, [answerList, Question]);

  const UpCount = () => {
    setCount(count + 1);
  };
  const DownCount = () => {
    setCount(count - 1);
  };
  const DeleteAnswer = (id: string) => {
    DeleteMutation(id);
  };
  return (
    <div>
      {Question.answers.length === 0 ? (
        <Header>
          <Item>
            <h2>Answer</h2>
          </Item>
        </Header>
      ) : (
        <>
          <Header>
            <Item>
              <h2>{Question.answers.length} Answer</h2>
            </Item>
            <Item2>
              <label>Sorted by:</label>
              <Select>
                <option>Highest scroe (default)</option>
                <option>Trending (recent votes count more)</option>
                <option>Date modified (newest first)</option>
                <option>Date created (oldest first)</option>
              </Select>
            </Item2>
          </Header>
          {Question.answers.map((answer: AnswerData, key: number) => (
            <AnswerContainer key={key}>
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
                <AnswerContentIn
                  dangerouslySetInnerHTML={{ __html: answer?.content }}
                />
                <AnswerContentIn>
                  <button>Edit</button>
                  <button onClick={() => DeleteAnswer(answer.answerId)}>
                    DELETE
                  </button>
                </AnswerContentIn>
              </AnswerContent>
            </AnswerContainer>
          ))}
        </>
      )}
    </div>
  );
}

export default AnswerList;
