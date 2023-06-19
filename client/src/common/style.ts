import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    width: 100%;
    height: 100%;
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
  border: 1px solid #b8afaf;
  border-radius: 7px;
  width: 300px;
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
`;

export const Text = styled.p`
  font-size: 13px;
  color: gray;
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 20px;
`;
