import { useEffect, useState } from 'react';
import {
  GetMutation,
  DeleteMutation,
  SelectMutation,
  VoteMutation,
  SortMutation,
} from '../queries';
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
  const [selectedSort, setSelectedSort] = useState('1');
  const { data: answerList } = GetMutation(id);
  const dispatch = useDispatch();
  const Question = useSelector((state: RootState) => state.item);
  console.log(Question);

  useEffect(() => {
    dispatch(getAnswer(answerList));
  }, [answerList, Question]);

  const UpCount = (id: string, recommand: boolean) => {
    VoteMutation(id, recommand);
  };
  const DownCount = (id: string, recommand: boolean) => {
    VoteMutation(id, recommand);
  };
  const DeleteAnswer = (id: string) => {
    DeleteMutation(id);
  };
  const SelectAnswer = (id: string) => {
    SelectMutation(id);
  };
  const SortAnswer = (id: string, sortedBy: string) => {
    SortMutation(id, sortedBy);
  };
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const sortedBy = event.target.value;
    setSelectedSort(sortedBy);
    SortAnswer(`${Question.questionId}`, sortedBy);
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
              <Select onChange={handleSortChange}>
                <option value="1">Highest scroe (default)</option>
                <option value="2">Trending (recent votes count more)</option>
                <option value="3">Date modified (newest first)</option>
                <option value="4">Date created (oldest first)</option>
              </Select>
            </Item2>
          </Header>
          {Question.answers.map((answer: AnswerData, key: number) => (
            <AnswerContainer key={key}>
              <AnswerVote>
                <AnswerVoteIn>
                  <Circle onClick={() => UpCount(answer.answerId, true)}>
                    <img src="/answer_svg/up.svg/" alt="up" />
                  </Circle>
                  <Count>{answer.vote}</Count>
                  <Circle onClick={() => DownCount(answer.answerId, false)}>
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
                    Delete
                  </button>
                  <button onClick={() => SelectAnswer(answer.answerId)}>
                    Select
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
