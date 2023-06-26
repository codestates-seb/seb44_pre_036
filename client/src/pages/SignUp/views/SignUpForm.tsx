import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import axios, { AxiosError } from 'axios';
import useGetMe from '../../../common/utils/customHook/useGetMe';
import UserInfoLabel from '../../../common/components/UserInfoLabel';
import { StyledInput, UserInfoWrapper } from '../../../common/style';
import { SignUpBox } from '../style';
import { IUserInfoSignUp } from '../model/UserInfoSignUp';
import {
  name,
  email,
  password,
  ACCESS_TOKEN,
  PASSWORD_MIN_LENGTH,
  EMAIL_REGEX,
  PASSWORD_REGEX,
  PASSWORD_REGEX_NO_LETTERS,
  PASSWORD_REGEX_NO_NUMBERS,
  WARNING_MESSAGE_PASSWORD_EMPTY,
  WARNING_MESSAGE_EMAIL_EMPTY,
  WARNING_MESSAGE_PASSWORD_WEAK,
} from '../../../common/utils/constants';
import ConfirmButton from '../components/ConfirmButton';
import { MembershipUrl } from '../../../common/utils/enum';
import { ErrorMsg } from '../../../common/style';
import useEncryptToken from '../../../common/utils/customHook/useEncryptToken';
import NotificationBeforeSignUp from '../components/NotificationBeforeSignUp';
import TextAllowingToReceiveServices from '../components/TextAllowingToReceiveServices';
import ImNotARobotBox from '../components/ImNotARobotBox';
import PasswordRuleMessage from '../components/PasswordRuleMessage';

const postData = async (data: IUserInfoSignUp) => {
  console.log('1. 준기님께 보내는 유저 정보', data);
  const response = await axios.post(MembershipUrl.SignUp, data);
  console.log('2. 준기님께 계정 정보 전달 후 받아온 데이터', response);

  console.log('3. 준기님께 계정 정보 전달 후 받아온 헤더', response.headers);

  return response.headers;
};

function SignUpForm() {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isClicked, setIsClicked] = useState(false);
  const encrypt = useEncryptToken();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IUserInfoSignUp>();

  const { refetch: refetchGetMe } = useGetMe();

  const mutation = useMutation(postData, {
    onSuccess: async (headers) => {
      console.log('3. 준기님께 계정 정보 전달 후 받아온 데이터', headers);

      if (!headers) {
        return;
      }
      const accessToken = headers.authorization;

      console.log(
        '4. 준기님께 계정 정보 전달 후 받아온 accessToken',
        accessToken,
      );

      localStorage.setItem(ACCESS_TOKEN, encrypt(accessToken));

      const { data: userData } = await refetchGetMe();
      console.log(userData);
    },
    onError: (error: AxiosError) => {
      // TODO: 에러 처리
      if (error.response) {
        switch (error.response.status) {
          case 400:
            setErrorMessage('Invalid email or password.');
            break;
          case 409:
            setErrorMessage('The user already exists.');
            break;
          case 500:
            setErrorMessage('Server Error');
            break;
          default:
            setErrorMessage('Error');
            break;
        }
      }
    },
  });

  const onSubmit = async (userData: IUserInfoSignUp) => {
    console.log('1. 준기님께 보내는 유저 정보', userData);
    setIsClicked(true);
    await mutation.mutateAsync(userData);
  };

  return (
    <SignUpBox onSubmit={handleSubmit(onSubmit)}>
      <UserInfoWrapper>
        <UserInfoLabel label={'Display name'} />
        <StyledInput
          {...register(name, {
            required: 'Display name required',
            maxLength: {
              value: 10,
              message:
                'Display name must be equal to or less than 10 characters.',
            },
          })}
        />
      </UserInfoWrapper>
      {errors?.name?.message ? (
        <ErrorMsg>{errors.name.message}</ErrorMsg>
      ) : null}
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
        ) : errorMessage ? (
          <ErrorMsg>{errorMessage}</ErrorMsg>
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
            maxLength: {
              value: 16,
              message: `Must contain ${
                watch(password)?.length - 16
              } less characters.`,
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
      <PasswordRuleMessage />
      <ImNotARobotBox />
      <TextAllowingToReceiveServices />
      <ConfirmButton setIsClicked={setIsClicked} buttontext={'Sign Up'} />
      <NotificationBeforeSignUp />
    </SignUpBox>
  );
}
export default SignUpForm;
