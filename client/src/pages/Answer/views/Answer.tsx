import React, { useState } from 'react';
import axios, { AxiosError } from 'axios';
import { useMutation, useQuery } from 'react-query';
import { Answerdata } from '../model/type';
import { useForm } from 'react-hook-form';
import { AnswerForm } from '../styles';

const AnswerInfo = async (data: Answerdata) => {
  const response = await axios.post('http://localhost/ans', data);
  return response.data;
};
const DeleteAnswer = async (id: string) => {
  const response = await axios.delete('http://localhost/ans', {
    params: { id },
  });
  return response.data;
};
function Answer() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [text, setText] = useState('');

  const mutation = useMutation(AnswerInfo, {
    onSuccess: async (response) => {
      console.log(response);
    },
    onError: (error: AxiosError) => {
      const { response } = error;
      console.log(response);
    },
  });
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const handleClick = async () => {
    const data = {
      id: '1',
      date: 'string',
      content: text,
    };
    mutation.mutate(data);
  };
  return (
    <AnswerForm onSubmit={handleSubmit(handleClick)}>
      <h3>Answer</h3>
      <input
        {...register('Content', { required: true })}
        value={text}
        onChange={onChange}
      />
      <button type="submit">생성하기</button>
    </AnswerForm>
  );
}

export default Answer;
