import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AnswerForm, Button } from '../styles';
import Editor from '../../components/Editor';
import { PostMutation } from '../queries';
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

  //POST 요청
  const handleClick = async () => {
    const data = {
      memberId: '2',
      questionId: '1',
      content: text,
    };
    postMutation(data);
  };
  return (
    <AnswerForm onSubmit={handleSubmit(handleClick)}>
      <h3>Your Answer</h3>
      {/* <input
        {...register('Content', { required: true })}
        value={text}
        onChange={onChange}
      /> */}
      <Editor value={text} onChange={setText} />
      <Button type="submit">Post Your Answer</Button>
    </AnswerForm>
  );
}

export default AnswerEditor;
