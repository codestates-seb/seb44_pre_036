import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import axios from 'axios';
import UserInfoLabel from '../../../common/components/UserInfoLabel';
import {
  StyledInput,
  StyledForm,
  TextWrapper,
  UserInfoWrapper,
  Text,
} from '../style';
import { IUserInfoSignUp } from '../model/UserInfoSignUp';

type UserInfoField = 'DisplayName' | 'Email' | 'Password';
type Token = 'accessToken' | 'refreshToken';

const DisplayName: UserInfoField = 'DisplayName';
const Email: UserInfoField = 'Email';
const Password: UserInfoField = 'Password';
const SIGN_UP_URL_EXAMPLE = 'https://localhost:5001/api/Account/SignUp';
const GET_ME_URL_EXAMPLE = 'https://localhost:5001/api/Account/GetMe';
const ACCESS_TOKEN: Token = 'accessToken';
const REFRESH_TOKEN: Token = 'refreshToken';
const PASSWORD_MIN_LENGTH = 8;
const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i;
const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d).+$/;
const PASSWORD_REGEX_NO_LETTERS = /^[^a-zA-Z]+$/;
const PASSWORD_REGEX_NO_NUMBERS = /^[^0-9]+$/;
const WARNING_MESSAGE_PASSWORD_EMPTY = 'Password cannot be empty';
const WARNING_MESSAGE_EMAIL_EMPTY = 'Email cannot be empty';
const WARNING_MESSAGE_PASSWORD_WEAK =
  'Please add one of the following things to make your password stronger';
const PASSWORD_RULE_MESSAGE = `Must contain at least eight characters, including at least 1 letter and 1 number`;

const postData = async (data: IUserInfoSignUp) => {
  const response = await axios.post(SIGN_UP_URL_EXAMPLE, data);

  return response.data;
};

const getMe = async () => {
  const accessToken = localStorage.getItem(ACCESS_TOKEN);

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
  const [isClicked, setIsClicked] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IUserInfoSignUp>();

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
