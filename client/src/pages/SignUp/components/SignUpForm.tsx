import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import axios from 'axios';
import {
  StyledInput,
  StyledForm,
  TextWrapper,
  UserInfoWrapper,
  UserInfoLabel,
  Text,
} from '../style';

interface IForm {
  DisplayName: string;
  Email: string;
  Password: string;
}

const SIGN_UP_URL_EXAMPLE = 'https://localhost:5001/api/Account/SignUp';
const GET_ME_URL_EXAMPLE = 'https://localhost:5001/api/Account/GetMe';

const postData = async (data: IForm) => {
  const response = await axios.post(SIGN_UP_URL_EXAMPLE, data);

  return response.data;
};

const getMe = async () => {
  const accessToken = localStorage.getItem('accessToken');

  if (!accessToken) {
    return null;
  }

  try {
    const response = await axios.get(GET_ME_URL_EXAMPLE, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

function SignUpForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IForm>();

  const mutation = useMutation(postData, {
    onSuccess: async (data) => {
      console.log(data);
      if (!data) {
        return;
      }
      const { accessToken, refreshToken } = data;

      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);

      const userData = await getMe();
      console.log(userData);
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const onSubmit = async (userData: IForm) => {
    setIsSubmitted(true);
    try {
      await mutation.mutateAsync(userData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <UserInfoWrapper>
        <UserInfoLabel>Display name</UserInfoLabel>
        <StyledInput {...register('DisplayName', { required: false })} />
      </UserInfoWrapper>
      <UserInfoWrapper>
        <UserInfoLabel>Email</UserInfoLabel>
        <StyledInput
          {...register('Email', {
            required: 'Email cannot be empty',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
              message: `${watch('Email')} is not a valid email address`,
            },
          })}
        />
        {isSubmitted && typeof errors?.Email?.message === 'string' ? (
          <p>{errors.Email.message}</p>
        ) : null}
      </UserInfoWrapper>
      <UserInfoWrapper>
        <UserInfoLabel>Password</UserInfoLabel>
        <StyledInput
          {...register('Password', {
            required: 'Password cannot be empty',
            minLength: {
              value: 8,
              message: `Must contain at least ${
                8 - (watch('Password')?.length || 0)
              } more characters.`,
            },
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d).+$/,
              message: `Please add one of the following things to make your password stronger: 
                  ${
                    watch('Password') && /^[^a-zA-Z]+$/.test(watch('Password'))
                      ? 'letters'
                      : ''
                  }
                  ${
                    watch('Password') && /^[^0-9]+$/.test(watch('Password'))
                      ? 'numbers'
                      : ''
                  }`,
            },
          })}
        />
        {isSubmitted && typeof errors?.Password?.message === 'string' ? (
          <p>{errors.Password.message}</p>
        ) : null}
      </UserInfoWrapper>
      <TextWrapper>
        <Text>
          Passwords must contain at least eight characters, including at least 1
          letter and 1 number
        </Text>
      </TextWrapper>
      <button type="submit">Sign Up</button>
    </StyledForm>
  );
}
export default SignUpForm;
