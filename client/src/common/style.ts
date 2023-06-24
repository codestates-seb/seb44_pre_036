import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }

  html, body, #root {
    width: 100%;
    min-height: 100%;
  }
`;

export const MembershipPageStyle = createGlobalStyle`
  body {
    background-color: #f5f5f5 ;
  }
`;

export const BlueButton = styled.button`
  background-color: #0a95ff;
  height: 2.25rem;
  border: 0;
  border-radius: 3px;
  border-top: 2px solid #6cbfff;
  padding: 0.625rem;
  cursor: pointer;
  color: white;
  text-decoration: none;

  &:hover {
    background: #0074cc;
    border-top: 2px solid #66ace0;
  }

  &:active {
    background: #0063bf;
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
    pointer-events: none;
  }
`;

export const StyledLabel = styled.label`
  font-size: 15px;
  font-weight: 700;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  width: 300px;
  height: 237px;
  background-color: white;
`;

export const StyledInput = styled.input`
  height: 28.5px;
  width: 260px;
  border: 1px solid #b8afaf;
  border-radius: 3px;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 260px;
  margin-top: 7px;
`;

export const Text = styled.p`
  font-size: 13px;
  font-weight: 440;
  color: gray;
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 20px;
`;

export const ErrorMsg = styled.p`
  color: #df3232;
  font-size: 13.5px;
  margin: 5px 0 0 2px;
`;

export const SocialLoginBtn = styled.button`
  height: 40px;
  margin: 15px 0 15px 0;
  background-color: transparent;
  border: none;
`;

export const StackoverflowLogo = styled.div`
  background-image: url('/header_svg/slogo.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 45px;
  height: 45px;
`;
