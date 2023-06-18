import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import axios from 'axios';
import useGetMe from '../../../common/utils/customHook/useGetMe';
import UserInfoLabel from '../../../common/components/UserInfoLabel';
import {
  StyledForm,
  StyledInput,
  UserInfoWrapper,
} from '../../../common/style';
import { IUserInfoLogin } from '../model/UserInfoLogin';
import {
  Email,
  Password,
  SIGN_UP_URL_EXAMPLE,
  ACCESS_TOKEN,
  REFRESH_TOKEN,
  PASSWORD_MIN_LENGTH,
  EMAIL_REGEX,
  PASSWORD_REGEX,
  PASSWORD_REGEX_NO_LETTERS,
  PASSWORD_REGEX_NO_NUMBERS,
  WARNING_MESSAGE_PASSWORD_EMPTY,
  WARNING_MESSAGE_EMAIL_EMPTY,
  WARNING_MESSAGE_PASSWORD_WEAK,
} from '../../../common/utils/constants';

const postData = async (data: IUserInfoLogin) => {
  const response = await axios.post(SIGN_UP_URL_EXAMPLE, data);

  return response.data;
};

function LoginForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IUserInfoLogin>();

  const getMe = useGetMe();

  const mutation = useMutation(postData, {
    onSuccess: async (data) => {
      console.log(data);
      if (!data) {
        return;
      }
      const { accessToken, refreshToken } = data;

      localStorage.setItem(ACCESS_TOKEN, accessToken);
      localStorage.setItem(REFRESH_TOKEN, refreshToken);

      const userData = await getMe();
      console.log(userData);
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const onSubmit = async (userData: IUserInfoLogin) => {
    console.log(userData);
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
        <UserInfoLabel label={Email} />
        <StyledInput
          {...register('Email', {
            required: WARNING_MESSAGE_EMAIL_EMPTY,
            pattern: {
              value: EMAIL_REGEX,
              message: `${watch('Email')} is not a valid email address`,
            },
          })}
        />
        {errors?.Email?.message === WARNING_MESSAGE_EMAIL_EMPTY ||
        (isSubmitted && typeof errors?.Email?.message === 'string') ? (
          <p>{errors.Email.message}</p>
        ) : null}
      </UserInfoWrapper>
      <UserInfoWrapper>
        <UserInfoLabel label={Password} />
        <StyledInput
          type="password"
          {...register('Password', {
            required: WARNING_MESSAGE_PASSWORD_EMPTY,
            minLength: {
              value: PASSWORD_MIN_LENGTH,
              message: `Must contain at least ${
                PASSWORD_MIN_LENGTH - (watch('Password')?.length || 0)
              } more characters.`,
            },
            pattern: {
              value: PASSWORD_REGEX,
              message: `${WARNING_MESSAGE_PASSWORD_WEAK}: 
                  ${
                    watch('Password') &&
                    PASSWORD_REGEX_NO_LETTERS.test(watch('Password'))
                      ? 'letters'
                      : ''
                  }
                  ${
                    watch('Password') &&
                    PASSWORD_REGEX_NO_NUMBERS.test(watch('Password'))
                      ? 'numbers'
                      : ''
                  }`,
            },
          })}
        />
        {errors?.Password?.message === WARNING_MESSAGE_PASSWORD_EMPTY ||
        (isSubmitted && typeof errors?.Password?.message === 'string') ? (
          <p>{errors.Password.message}</p>
        ) : null}
      </UserInfoWrapper>
      <button type="submit">Log in</button>
    </StyledForm>
  );
}
export default LoginForm;
