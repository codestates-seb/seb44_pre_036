import styled from 'styled-components';

export const Page = styled.main`
  display: flex;
  justify-content: center;
  padding-bottom: 1.75rem;
  min-height: 100%;
  width: 47rem;
`;

export const AskContainer = styled.section`
  padding: 1rem;
  font-size: 0.875rem;

  & > :first-child {
    font-size: 1.75rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;

export const TitleInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  border: 1px solid #ccc;
  padding: 1rem;
  margin-bottom: 1rem;
  background: #ffffff;
  border-radius: 3px;

  & > * {
    margin-bottom: 0.5rem;
  }

  & > :last-child {
    margin-bottom: 0;
  }
`;

export const TitleInputBox = styled.input`
  width: 100%;
  border: 1px solid #babfc5;
  padding: 0.5rem;
  border-radius: 3px;

  ::placeholder {
    color: #babfc3;
  }

  :focus {
    outline: none;
  }

  :focus::placeholder {
    color: transparent;
  }
`;

export const QuestionInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  border: 1px solid #ccc;
  padding: 1rem;
  margin-bottom: 1rem;
  background: #ffffff;
  border-radius: 3px;

  & > * {
    margin-bottom: 0.5rem;
  }

  & > :last-child {
    margin-bottom: 0;
  }

  & > .quill {
    background: #ffffff;
    width: 100%;

    & > :first-child {
      border-bottom: none;
      border-radius: 3px 3px 0 0;
    }

    & > :nth-child(2) {
      height: 13rem;
      border-radius: 0 0 3px 3px;
    }
  }
`;
