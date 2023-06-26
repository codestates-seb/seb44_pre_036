import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import axios, { AxiosError } from 'axios';
import useGetMe from '../../../common/utils/customHook/useGetMe';
import useEncryptToken from '../../../common/utils/customHook/useEncryptToken';
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

  return response.headers;
};

function LoginForm() {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();
  const encryptToken = useEncryptToken();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IUserInfoLogin>();

  const { refetch: refetchGetMe } = useGetMe();

  const mutation = useMutation(postData, {
    onSuccess: async (header) => {
      if (!header) {
        return;
      }
      const accessToken: string = header.authorization.split(' ')[1];

      localStorage.removeItem(ACCESS_TOKEN);
      localStorage.setItem(ACCESS_TOKEN, encryptToken(accessToken));

      await refetchGetMe();

      navigate('/');
    },
    onError: (error: AxiosError) => {
      if (error.response) {
        const statusCode: number = error.response.status;
        // TODO: 에러 처리
        // 비밀번호가 잘못됨 (404) -> The email or password is incorrect.
        switch (statusCode) {
          case 404:
            setErrorMessage('The email or password is incorrect.');
            break;
          // 서버 에러 시 (500) -> Server Error
          case 500:
            setErrorMessage('Server Error');
            break;
          // 기타 에러 시 (400) -> Error
          default:
            setErrorMessage('Error');
            break;
        }
      }
    },
  });

  const onSubmit = async (userData: IUserInfoLogin) => {
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
      <ConfirmButton setIsClicked={setIsClicked} buttontext={'Log in'} />
    </StyledForm>
  );
}
export default LoginForm;
