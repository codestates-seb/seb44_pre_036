import axios, { AxiosError } from 'axios';
import { Answerdata, Patchdata } from './model/type';
import { useMutation, useQuery } from 'react-query';

//POST,GET,PATCH,DELETE Method
const PostAnswer = async (data: Answerdata) => {
  const response = await axios.post(
    'http://localhost:8080/questions/answers/',
    data,
  );
  return response.data;
};
const GetAnswer = async (id: string) => {
  const response = await axios.get(
    `http://localhost:8080/questions/answers/${id}`,
  );
  return response.data;
};
const PatchAnswer = async (data: Patchdata) => {
  const response = await axios.patch(
    'http://localhost:8080/questions/answers/',
    data,
  );
  return response.data;
};
const DeleteAnswer = async (id: string) => {
  const response = await axios.delete(
    `http://localhost:8080/questions/answers/${id}`,
  );
  return response.data;
};

export const PostMutation = () => {
  return useMutation(PostAnswer, {
    onSuccess: async (response) => {
      console.log(response);
    },
    onError: (error: AxiosError) => {
      const { response } = error;
      console.log(response);
    },
  });
};

export const GetMutation = (id: string) => {
  return useQuery(['answer', id], () => GetAnswer(id), {
    onSuccess: async (data) => {
      console.log(data);
    },
    onError: (error: AxiosError) => {
      const { response } = error;
      console.log(response);
    },
  });
};

export const PatchMutation = () => {
  return useMutation(PatchAnswer, {
    onSuccess: async (response) => {
      console.log(response);
    },
    onError: (error: AxiosError) => {
      const { response } = error;
      console.log(response);
    },
  });
};

export const DeleteMutation = () => {
  return useMutation(DeleteAnswer, {
    onSuccess: async (response) => {
      console.log(response);
    },
    onError: (error: AxiosError) => {
      const { response } = error;
      console.log(response);
    },
  });
};
