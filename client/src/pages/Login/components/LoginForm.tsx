import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import axios from 'axios';
import useGetMe from '../../../common/utils/customHook/useGetMe';
import UserInfoLabel from '../../../common/components/UserInfoLabel';
import {
  ErrorMsg,
  StyledForm,
  StyledInput,
  UserInfoWrapper,
} from '../../../common/style';
import { IUserInfoLogin } from '../model/UserInfoLogin';
import {
  email,
  password,
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
import ConfirmButton from '../../SignUp/components/ConfirmButton';
import { MembershipUrl } from '../../../common/utils/enum';

const postData = async (data: IUserInfoLogin) => {
  const response = await axios.post(MembershipUrl.Login, data);
  console.log('준기님께 계정 정보 전달 후 받아온 데이터', response.headers);
  return response.headers;
};

function LoginForm() {
  const [isClicked, setIsClicked] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IUserInfoLogin>();

  const { refetch: refetchGetMe } = useGetMe();

  const mutation = useMutation(postData, {
    onSuccess: async (data) => {
      if (!data) {
        return;
      }
      const accessToken = data.authorization.split(' ')[1];

      localStorage.removeItem(ACCESS_TOKEN);
      localStorage.setItem(ACCESS_TOKEN, accessToken);

      const { data: userData } = await refetchGetMe();
      console.log(userData);
    },
    onError: (error) => {
      console.error(error);
      // TODO: 에러 처리
      // 이메일 형식이 잘못됨 (400) -> The email is not a valid email address.
      // 비밀번호가 잘못됨 (401) -> The email or password is incorrect.
      // 이메일이 존재하지 않음 (404) -> No user found with matching email
      // 서버 에러 (500)
    },
  });

  const onSubmit = async (userData: IUserInfoLogin) => {
    console.log(userData);
    setIsClicked(true);

    await mutation.mutateAsync(userData);
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <UserInfoWrapper>
        <UserInfoLabel label={'Email'} />
        <StyledInput
          {...register(email, {
            required: WARNING_MESSAGE_EMAIL_EMPTY,
            pattern: {
              value: EMAIL_REGEX,
              message: `${watch(email)} is not a valid email address`,
            },
          })}
        />
        {errors?.email?.message === WARNING_MESSAGE_EMAIL_EMPTY ||
        (isClicked && typeof errors?.email?.message === 'string') ? (
          <ErrorMsg>{errors.email.message}</ErrorMsg>
        ) : null}
      </UserInfoWrapper>
      <UserInfoWrapper>
        <UserInfoLabel label={'Password'} />
        <StyledInput
          type="password"
          {...register(password, {
            required: WARNING_MESSAGE_PASSWORD_EMPTY,
            minLength: {
              value: PASSWORD_MIN_LENGTH,
              message: `Must contain at least ${
                PASSWORD_MIN_LENGTH - (watch(password)?.length || 0)
              } more characters.`,
            },
            pattern: {
              value: PASSWORD_REGEX,
              message: `${WARNING_MESSAGE_PASSWORD_WEAK}: 
                  ${
                    watch(password) &&
                    PASSWORD_REGEX_NO_LETTERS.test(watch(password))
                      ? 'letters'
                      : ''
                  }
                  ${
                    watch(password) &&
                    PASSWORD_REGEX_NO_NUMBERS.test(watch(password))
                      ? 'numbers'
                      : ''
                  }`,
            },
          })}
        />
        {errors?.password?.message === WARNING_MESSAGE_PASSWORD_EMPTY ||
        (isClicked && typeof errors?.password?.message === 'string') ? (
          <ErrorMsg>{errors.password.message}</ErrorMsg>
        ) : null}
      </UserInfoWrapper>
      <ConfirmButton
        type="submit"
        setIsClicked={setIsClicked}
        buttontext={'Log in'}
      />
    </StyledForm>
  );
}
export default LoginForm;
