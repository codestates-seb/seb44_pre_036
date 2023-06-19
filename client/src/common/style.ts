import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }

  body {
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyle;

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
`;
