import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Page = styled.main`
  padding: 1rem;
  font-size: 0.875rem;
  width: 47rem;
`;

export const TitleInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  padding: 1rem;
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

export const BodyInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  padding: 1rem;
  background: #ffffff;
  border-radius: 3px;

  & > * {
    margin-bottom: 0.5rem;
  }

  & > :last-child {
    margin-bottom: 0;
    width: 100%;

    & > :first-child {
      border-radius: 3px 3px 0 0;
    }

    & > :last-child {
      border-radius: 0 0 3px 3px;

      & > :first-child {
        resize: vertical;
      }
    }
  }
`;

export const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  padding: 1rem;
  background: #ffffff;
  border-radius: 3px;

  & > * {
    margin-bottom: 0.5rem;
  }

  & > :last-child {
    margin-bottom: 0;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  padding: 1rem;
  margin-bottom: 1rem;
  background: #ffffff;
  border-radius: 3px;

  & > :first-child {
    margin-right: 1rem;
  }
`;

export const TransparentButton = styled.button`
  background-color: transparent;
  height: 2.25rem;
  border: 0;
  border-radius: 3px;
  padding: 0.625rem;
  cursor: pointer;
  color: #0074cc;
  text-decoration: none;

  &:hover {
    background: #eff8ff;
  }

  &:active {
    background: #cde9fe;
  }
`;
