import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../common/store/RootStore';
import axios from 'axios';
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
  console.log('2 준기님께 계정 정보 전달 후 받아온 데이터', response.headers);
  return response.headers;
};

function LoginForm() {
  const [isClicked, setIsClicked] = useState(false);
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
      console.log(
        '3 준기님께 계정 정보 전달 후 받아온 accessToken',
        accessToken,
      );

      localStorage.removeItem(ACCESS_TOKEN);
      localStorage.setItem(ACCESS_TOKEN, encryptToken(accessToken));

      await refetchGetMe();

      navigate('/');
    },
    onError: (error: any) => {
      console.log(error.response.status);
      // TODO: 에러 처리
      // 이메일 형식이 잘못됨 (400) -> The email is not a valid email address.
      // 비밀번호가 잘못됨 (404) -> The email or password is incorrect.
      // 이메일이 존재하지 않음 (404) 해결!
      //
      // 서버 에러 (500)
    },
  });

  const onSubmit = async (userData: IUserInfoLogin) => {
    console.log('1 유저데이터', userData);
    setIsClicked(true);

    await mutation.mutateAsync(userData);
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem(ACCESS_TOKEN);
    navigate('/');
  };

  const myInfo = useSelector((state: RootState) => state.userInfo);
  const memberId = useSelector((state: RootState) => state.userInfo.memberId);
  console.log(myInfo, '!!!!!!!');
  const handleWithdrawal = async () => {
    localStorage.removeItem(ACCESS_TOKEN);
    await axios.delete(MembershipUrl.Withdrawal + `/${memberId}`);
    navigate('/');
  };
  // U2FsdGVkX18IDSp5DehBW9+HIJMk4LMvSXmv1WsA+BFxqNYJ+pB+NUaJrvFXFtgJfPEHZ/2s25eEFKw1DczXuuLnienz8MtMQr2VgUSEUV862Ke4n/RGo5Uig13FZzCv4Tg5IVLEj5UbkPqrbs6TIANsuc70b1DLYHbjVLBmE1hkr856L
  // U2FsdGVkX18FTcU2DGZmHDogNwNMdVTztPDGNdnxk+I+xrRbs4aRZQ9bnW5x6tzonlW+pVwkioWD3a8rD6/+y8Xw5v4pz4uW11Wzo/9bgcMVT6/q2zAsfhqJowq/F2CsmOjANZTvQIWSV8mXV7VUthQAVo7Gk5QPjnVwVihZs7qh8BfCQ
  // U2FsdGVkX18q9uB4sa/BNvRGmFbcZwmbZcsj1scOkT5/Jws7fa47xHRKl20gM/VIH/mcWW/vPRlRB0N+PSjxZbz0wO1td5GXpg2ZNkOX/f+Kuz3GMkt+E2cgCPmYgbb7TuHOgRpUMPTVYm87kIzyLWG5jXXQiZCX5PVbSDg4KP49kwVjb
  return (
    <>
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
        <ConfirmButton setIsClicked={setIsClicked} buttontext={'Log in'} />
        <h1>로그아웃</h1>
        <button onClick={handleLogout}>log out</button>
      </StyledForm>
      <section>
        <h1>회원 탈퇴</h1>
        <button onClick={handleWithdrawal}>withdraw</button>
      </section>
    </>
  );
}
export default LoginForm;
