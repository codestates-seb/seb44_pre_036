import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import axios from 'axios';
import useGetMe from '../../../common/utils/customHook/useGetMe';
import UserInfoLabel from '../../../common/components/UserInfoLabel';
import {
  StyledInput,
  TextWrapper,
  UserInfoWrapper,
  Text,
} from '../../../common/style';
import { SignUpBox } from '../style';
import { IUserInfoSignUp } from '../model/UserInfoSignUp';
import {
  name,
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
  PASSWORD_RULE_MESSAGE,
} from '../../../common/utils/constants';
import ConfirmButton from './ConfirmButton';
import { MembershipUrl } from '../../../common/utils/enum';

const postData = async (data: IUserInfoSignUp) => {
  const response = await axios.post(MembershipUrl.SignUp, data);

  return response.data;
};

function SignUpForm() {
  const [isClicked, setIsClicked] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IUserInfoSignUp>();

  const { refetch: refetchGetMe } = useGetMe();

  const mutation = useMutation(postData, {
    onSuccess: async (data) => {
      console.log('준기님께 계정 정보 전달 후 받아온 데이터', data);
      if (!data) {
        return;
      }
      const { accessToken, refreshToken } = data.tokens;

      localStorage.setItem(ACCESS_TOKEN, accessToken);
      localStorage.setItem(REFRESH_TOKEN, refreshToken);

      const { data: userData } = await refetchGetMe();
      console.log(userData);
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const onSubmit = async (userData: IUserInfoSignUp) => {
    console.log('준기님께 보내는 유저 정보', userData);
    setIsClicked(true);
    try {
      await mutation.mutateAsync(userData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SignUpBox onSubmit={handleSubmit(onSubmit)}>
      <UserInfoWrapper>
        <UserInfoLabel label={'DisplayName'} />
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
          <p>{errors.email.message}</p>
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
          <p>{errors.password.message}</p>
        ) : null}
      </UserInfoWrapper>
      <TextWrapper>
        <Text>{PASSWORD_RULE_MESSAGE}</Text>
      </TextWrapper>
      <ConfirmButton
        type="submit"
        setIsClicked={setIsClicked}
        buttontext={'Sign Up'}
      />
    </SignUpBox>
  );
}
export default SignUpForm;
