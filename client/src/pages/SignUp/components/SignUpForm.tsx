import { useState } from "react";
import { useForm } from "react-hook-form";
import { StyledInput, StyledForm, TextWrapper, UserInfoWrapper, UserInfoLabel, Text } from "../style";
import NotARobotBox from "./NotARobotBox";

interface IForm {
    DisplayName: string;
    Email: string;
    Password: string;
}

function SignUpForm(){
    const [isSubmitted,setIsSubmitted] = useState(false);  
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm<IForm>();
    const onSubmit = (data: IForm) => {
        console.log(data);
    }

    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <UserInfoWrapper>
            < UserInfoLabel>Display name</ UserInfoLabel>
            <StyledInput {...register("DisplayName", { required: false })}/>
          </UserInfoWrapper>
          <UserInfoWrapper>
            < UserInfoLabel>Email</ UserInfoLabel>
            <StyledInput {...register("Email", {
                required: "Email cannot be empty",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
                  message: `${watch("Email")} is not a valid email address`,
                },
              })}/>
              {isSubmitted && typeof errors?.Email?.message === "string" ? <p>{errors.Email.message}</p> : null}
          </UserInfoWrapper>
          <UserInfoWrapper>
            < UserInfoLabel>Password</ UserInfoLabel>
            <StyledInput {...register("Password", {
                required: "Password cannot be empty",
                minLength: {
                  value: 8,
                  message: `Must contain at least ${
                    8 - (watch("Password")?.length || 0)
                  } more characters.`,
                },
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d).+$/,
                  message: `Please add one of the following things to make your password stronger: 
                  ${watch("Password") && /^[^a-zA-Z]+$/.test(watch("Password")) ? "letters" : ""}
                  ${watch("Password") && /^[^0-9]+$/.test(watch("Password")) ? "numbers" : ""}`,
                },
              })}/>
              {isSubmitted && typeof errors?.Password?.message === "string" ? <p>{errors.Password.message}</p> : null}
            </UserInfoWrapper>
            <Text>Passwords must contain at least eight characters, including at least 1 letter and 1 number</Text>
            <NotARobotBox/>
            <button onClick={()=> setIsSubmitted(true)}>Sign Up</button>
            <TextWrapper>
            <input type="checkbox"/>
            <Text>Opt-in to receive occasional product updates, user research invitations, company announcements, and digests.</Text>
            </TextWrapper>

        </StyledForm>
    )
}
export default SignUpForm;