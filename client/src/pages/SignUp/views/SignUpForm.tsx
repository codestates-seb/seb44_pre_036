import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import axios from 'axios';
// import useGetMe from '../../../common/utils/customHook/useGetMe';
import UserInfoLabel from '../../../common/components/UserInfoLabel';
import {
  StyledInput,
  TextWrapper,
  UserInfoWrapper,
  Text,
} from '../../../common/style';
import {
  Text2,
  Text3,
  TextWrapper2,
  TextWrapper4,
  CheckBox,
  CheckBoxWrapper,
  RobotBoxContainer,
  RobotBox,
} from '../style';
import { SignUpBox } from '../style';
import { IUserInfoSignUp } from '../model/UserInfoSignUp';
import {
  name,
  email,
  password,
  // ACCESS_TOKEN,
  PASSWORD_MIN_LENGTH,
  EMAIL_REGEX,
  PASSWORD_REGEX,
  PASSWORD_REGEX_NO_LETTERS,
  PASSWORD_REGEX_NO_NUMBERS,
  WARNING_MESSAGE_PASSWORD_EMPTY,
  WARNING_MESSAGE_EMAIL_EMPTY,
  WARNING_MESSAGE_PASSWORD_WEAK,
  PASSWORD_RULE_MESSAGE,
} from '../../../common/utils/constants';
import ConfirmButton from '../components/ConfirmButton';
import { MembershipUrl } from '../../../common/utils/enum';
import { ErrorMsg } from '../../../common/style';

const postData = async (data: IUserInfoSignUp) => {
  console.log('1. 준기님께 보내는 유저 정보', data);
  const response = await axios.post(MembershipUrl.SignUp, data);
  console.log('2. 준기님께 계정 정보 전달 후 받아온 데이터', response);

  console.log('3. 준기님께 계정 정보 전달 후 받아온 헤더', response.headers);

  return response.headers;
};

function SignUpForm() {
  const [isClicked, setIsClicked] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IUserInfoSignUp>();

  // const { refetch: refetchGetMe } = useGetMe();

  const mutation = useMutation(postData, {
    onSuccess: async (headers) => {
      console.log('3. 준기님께 계정 정보 전달 후 받아온 데이터', headers);
      return null;
      // if (!headers) {
      //   return;
      // }
      // const accessToken = headers.Authorization;

      // console.log(
      //   '4. 준기님께 계정 정보 전달 후 받아온 accessToken',
      //   accessToken,
      // );

      // localStorage.setItem(ACCESS_TOKEN, accessToken);

      // const { data: userData } = await refetchGetMe();
      // console.log(userData);
    },
    onError: (error) => {
      console.error(error);
      // TODO: 에러 처리
      // 유효성 검사 에러 (400)
      // 중복된 이메일 에러는 처리할 필요 없음 -> 로그인 시켜주면 된다. (409)
      // 서버 에러 (500)
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
        <StyledInput {...register(name, { required: false })} />
      </UserInfoWrapper>
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
      <TextWrapper>
        <Text>{PASSWORD_RULE_MESSAGE}</Text>
      </TextWrapper>
      <RobotBoxContainer>
        <RobotBox>
          <TextWrapper4>
            <StyledInput type="checkbox" />
            <Text3>I'm not a robot</Text3>
          </TextWrapper4>
        </RobotBox>
      </RobotBoxContainer>
      <TextWrapper2>
        <CheckBoxWrapper>
          <CheckBox type="checkbox" />
        </CheckBoxWrapper>
        <Text2>
          Opt-in to receive occasional product updates, user research
          invitations, company announcements, and digests.
        </Text2>
      </TextWrapper2>
      <ConfirmButton setIsClicked={setIsClicked} buttontext={'Sign Up'} />
      <TextWrapper>
        <Text>
          By clicking “Sign up”, you agree to our terms of service and
          acknowledge that you have read and understand our privacy policy and
          code of conduct.
        </Text>
      </TextWrapper>
    </SignUpBox>
  );
}
export default SignUpForm;
