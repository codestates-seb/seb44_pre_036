import { useState } from 'react';
import { AnswerForm, Button } from '../../../common/Answer/styles';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Editor from '../../../common/components/Editor';
import { PatchMutation } from '../../../common/Answer/queries';

function EditAnswer() {
  const {
    //register,
    handleSubmit,
    //formState: { errors },
  } = useForm();
  const { id = '' } = useParams();
  const [text, setText] = useState<string>('');
  const navigate = useNavigate();
  const handleClick = async () => {
    const data = {
      answerId: id,
      content: text,
    };
    console.log(data);
    PatchMutation(data);
    navigate(-1);
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
      <Button type="submit">Edit Your Answer</Button>
    </AnswerForm>
  );
}

export default EditAnswer;
