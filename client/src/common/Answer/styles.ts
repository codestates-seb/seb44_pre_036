import styled from 'styled-components';

export const AnswerForm = styled.form`
  float: left;
  padding: 1rem;
  border-radius: 8px;
  width: 100%;
  max-width: 752px;
  min-width: 470px;
  margin: 0 auto;
  /* box-shadow: 12px 24px 24px #ededed; */
  h3 {
    margin-bottom: 10px;
  }
`;

export const Button = styled.button`
  margin-top: 70px;
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

export const Header = styled.div`
  width: 100%;
  max-width: 752px;
  display: flex;
  align-items: center;
  margin-top: 5px;
  padding-left: 1rem;
`;

export const Item = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const Item2 = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 2px;
`;

export const Select = styled.select`
  border: 1px solid #cccccc;
  border-radius: 3px;
  padding: 0.6em 0.7em;
  font-size: 13px;
`;

export const AnswerContainer = styled.div`
  display: flex;
  max-width: 752px;
  padding-top: 16px;
`;

export const AnswerVote = styled.div`
  width: 70px;
  padding-right: 16px;
  grid-column: 1;
`;

export const AnswerVoteIn = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  flex-direction: column;
  margin: 6px;
`;

export const Circle = styled.button`
  border: 1px solid #c4c4c4;
  border-radius: 50%;
  padding: 0.4em;
  cursor: pointer;
  img {
    width: 30px;
    height: 28px;
  }
  :hover {
    background-color: #9f9f9f;
  }
`;

export const Count = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 600;
  font-size: 20px;
  margin: 4px;
`;

export const AnswerContent = styled.div`
  padding-right: 16px;
  grid-column: 2;
  width: auto;
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const AnswerContentIn = styled.div`
  width: 100%;
  button {
    margin: 3px;
    padding: 3px 6px;
    border: none;
    cursor: pointer;
    background: none;
    color: #c2c2c2;
  }
  button:hover {
    color: #909090;
  }
`;
