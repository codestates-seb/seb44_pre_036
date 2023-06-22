import { useState } from 'react';
import axios, { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import { Answerdata } from '../model/type';
import { useForm } from 'react-hook-form';
import { AnswerForm, Button } from '../styles';
import Editor from '../../components/Editor';
const AnswerInfo = async (data: Answerdata) => {
  const response = await axios.post(
    'http://localhost:8080/questions/answers/',
    data,
  );
  return response.data;
};
function Answer() {
  const { handleSubmit } = useForm();
  const [text, setText] = useState<string>('');

  const mutation = useMutation(AnswerInfo, {
    onSuccess: async (response) => {
      console.log(response);
    },
    onError: (error: AxiosError) => {
      const { response } = error;
      console.log(response);
    },
  });
  const handleClick = async () => {
    const data = {
      memberId: '2',
      questionId: '1',
      content: text,
    };
    mutation.mutate(data);
  };
  return (
    <AnswerForm onSubmit={handleSubmit(handleClick)}>
      <h3>Your Answer</h3>
      <Editor value={text} onChange={setText} />
      <Button type="submit">Post Your Answer</Button>
    </AnswerForm>
  );
}

export default Answer;
