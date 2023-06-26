import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AnswerForm, Button } from '../styles';
import Editor from '../../components/Editor';
import { PostMutation } from '../queries';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/RootStore';
function AnswerEditor() {
  const {
    //register,
    handleSubmit,
    //formState: { errors },
  } = useForm();
  const [text, setText] = useState<string>('');
  const { mutate: postMutation } = PostMutation();
  // const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setText(e.target.value);
  // };

  const Question = useSelector((state: RootState) => state.item);
  //POST 요청
  const handleClick = async () => {
    const data = {
      questionId: Question.questionId,
      content: text,
    };
    console.log(data);
    postMutation(data);
  };
  const handleText = (value: string) => {
    setText(value);
  };
  return (
    <AnswerForm onSubmit={handleSubmit(handleClick)}>
      <h3>Your Answer</h3>
      {/* <input
        {...register('Content', { required: true })}
        value={text}
        onChange={onChange}
      /> */}
      <Editor value={text} onChange={handleText} />
      <Button type="submit">Post Your Answer</Button>
    </AnswerForm>
  );
}

export default AnswerEditor;
