import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import axios from 'axios';
import useGetMe from '../../../common/utils/customHook/useGetMe';
import UserInfoLabel from '../../../common/components/UserInfoLabel';
import {
  StyledInput,
  StyledForm,
  TextWrapper,
  UserInfoWrapper,
  Text,
} from '../../../common/style';
import { IUserInfoSignUp } from '../model/UserInfoSignUp';
import {
  DisplayName,
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
  PASSWORD_RULE_MESSAGE,
} from '../../../common/utils/constants';

const postData = async (data: IUserInfoSignUp) => {
  const response = await axios.post(SIGN_UP_URL_EXAMPLE, data);

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
      console.log(data);
      if (!data) {
        return;
      }
      const { accessToken, refreshToken } = data;

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
    console.log(userData);
    setIsClicked(true);
    try {
      await mutation.mutateAsync(userData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <UserInfoWrapper>
        <UserInfoLabel label={DisplayName} />
        <StyledInput {...register(DisplayName, { required: false })} />
      </UserInfoWrapper>
      <UserInfoWrapper>
        <UserInfoLabel label={Email} />
        <StyledInput
          {...register(Email, {
            required: WARNING_MESSAGE_EMAIL_EMPTY,
            pattern: {
              value: EMAIL_REGEX,
              message: `${watch(Email)} is not a valid email address`,
            },
          })}
        />
        {errors?.Email?.message === WARNING_MESSAGE_EMAIL_EMPTY ||
        (isClicked && typeof errors?.Email?.message === 'string') ? (
          <p>{errors.Email.message}</p>
        ) : null}
      </UserInfoWrapper>
      <UserInfoWrapper>
        <UserInfoLabel label={Password} />
        <StyledInput
          type="password"
          {...register(Password, {
            required: WARNING_MESSAGE_PASSWORD_EMPTY,
            minLength: {
              value: PASSWORD_MIN_LENGTH,
              message: `Must contain at least ${
                PASSWORD_MIN_LENGTH - (watch(Password)?.length || 0)
              } more characters.`,
            },
            pattern: {
              value: PASSWORD_REGEX,
              message: `${WARNING_MESSAGE_PASSWORD_WEAK}: 
                  ${
                    watch(Password) &&
                    PASSWORD_REGEX_NO_LETTERS.test(watch(Password))
                      ? 'letters'
                      : ''
                  }
                  ${
                    watch(Password) &&
                    PASSWORD_REGEX_NO_NUMBERS.test(watch(Password))
                      ? 'numbers'
                      : ''
                  }`,
            },
          })}
        />
        {errors?.Password?.message === WARNING_MESSAGE_PASSWORD_EMPTY ||
        (isClicked && typeof errors?.Password?.message === 'string') ? (
          <p>{errors.Password.message}</p>
        ) : null}
      </UserInfoWrapper>
      <TextWrapper>
        <Text>{PASSWORD_RULE_MESSAGE}</Text>
      </TextWrapper>
      <button type="submit" onClick={() => setIsClicked(true)}>
        Sign Up
      </button>
    </StyledForm>
  );
}
export default SignUpForm;
