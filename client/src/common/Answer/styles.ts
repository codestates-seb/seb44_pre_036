import styled from 'styled-components';

export const AnswerForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  border-radius: 8px;
  max-width: 850px;
  min-width: 470px;
  margin: 0 auto;
  box-shadow: 12px 24px 24px #ededed;
`;

export const Button = styled.button`
  margin-top: 100px;
  cursor: pointer;
  padding: 10px;
  background-color: #2894ff;
  border-radius: 3px;
  border: 1px solid #2f97ff;
  color: #ffffff;
  &:hover {
    background-color: #0074e8;
  }
`;
