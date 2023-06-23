import AnswerList from '../components/AnswerList';
import AnswerEditor from '../components/AnswerEditor';
import { DummyData } from '../model/type';

function Answer() {
  const data: DummyData[] = [
    {
      answerId: '1',
      content:
        'Have you tried add reference to your dropped element to get the actual dimensions of it and then update calc_local_offset with this element Have you tried add reference to your dropped element to get the actual dimensions of it and then update calc_local_offset with this element Have you tried add reference to your dropped element to get the actual dimensions of it and then update calc_local_offset with this element',
      isAccepted: '채택되지 않은 답변',
      createdAt: new Date(),
      updatedAt: new Date(),
      questionId: '1',
      memberId: '3',
    },
  ];
  return (
    <>
      <AnswerList data={data} length={data.length} />
      <AnswerEditor />
    </>
  );
}

export default Answer;
