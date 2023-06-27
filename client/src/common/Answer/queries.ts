import axios, { AxiosError } from 'axios';
import { Answerdata, Patchdata } from './model/type';
import { useMutation, useQuery } from 'react-query';
import useDecrypt from '../utils/customHook/useDecryptToken';

const decrypt = useDecrypt();
const accessToken = decrypt(localStorage.getItem('accessToken') || '');
const header = { Authorization: `Bearer ${accessToken}` };
const url = 'https://preprojectseb44036.kro.kr:8080/questions/answers/';

//POST,GET,PATCH,DELETE Method
const PostAnswer = async (data: Answerdata) => {
  const response = await axios.post(url, data, { headers: header });
  return response.data;
};
const GetAnswer = async (id: string) => {
  const response = await axios.get(`${url}${id}`);
  return response.data;
};
const PatchAnswer = async (data: Patchdata) => {
  const response = await axios.patch(url, data);
  return response.data;
};
const DeleteAnswer = async (id: string) => {
  const response = await axios.delete(`${url}${id}`);
  return response.data;
};
const SelectAnswer = async (id: string) => {
  const response = await axios.patch(
    `${url}/select`,
    { answerId: id },
    { headers: header },
  );
  return response.data;
};
const VoteAnswer = async (id: string, recommand: boolean) => {
  const response = await axios.patch(
    `${url}/vote`,
    { answerId: id, recommand: recommand },
    { headers: header },
  );
  return response.data;
};
const SortAnswer = async (id: string, sortedBy: string) => {
  const response = await axios.get(`${url}/find`, {
    params: { questionId: id, sortedBy: sortedBy },
  });
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

export const PatchMutation = (data: Patchdata) => {
  return useQuery(['answer', data], () => PatchAnswer(data), {
    onSuccess: async (data) => {
      console.log(data);
    },
    onError: (error: AxiosError) => {
      const { response } = error;
      console.log(response);
    },
  });
};

export const DeleteMutation = (id: string) => {
  return useQuery(['answer', id], () => DeleteAnswer(id), {
    onSuccess: async (data) => {
      console.log(data);
    },
    onError: (error: AxiosError) => {
      const { response } = error;
      console.log(response);
    },
  });
};

export const SelectMutation = (id: string) => {
  return useQuery(['answer', id], () => SelectAnswer(id), {
    onSuccess: async (data) => {
      console.log(data);
    },
    onError: (error: AxiosError) => {
      const { response } = error;
      console.log(response);
    },
  });
};

export const VoteMutation = (id: string, recommand: boolean) => {
  return useQuery(['answer', id, recommand], () => VoteAnswer(id, recommand), {
    onSuccess: async (data) => {
      console.log(data);
    },
    onError: (error: AxiosError) => {
      const { response } = error;
      console.log(response);
    },
  });
};

export const SortMutation = (id: string, sortedBy: string) => {
  return useQuery(['answer', id, sortedBy], () => SortAnswer(id, sortedBy), {
    onSuccess: async (data) => {
      console.log(data);
    },
    onError: (error: AxiosError) => {
      const { response } = error;
      console.log(response);
    },
  });
};
