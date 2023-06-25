import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Page = styled.main`
  padding: 1rem;
  font-size: 0.875rem;
  max-width: 65rem;

  & > :nth-child(3) {
    width: 45rem;
  }

  & > :nth-child(4) {
    width: 45rem;
  }
`;

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: top;
  border-bottom: 1px solid #e3e6e8;
  padding-bottom: 1rem;

  & > :first-child {
    & > :first-child {
      color: #3b4045;
      font-weight: 400;
      font-size: 2rem;
      padding-bottom: 0.75rem;
    }
    & > :nth-child(2) {
      font-weight: 400;

      & > :first-child {
        color: #6a737c;
      }

      & > :nth-child(3) {
        margin-left: 0.5rem;
        color: #6a737c;
      }

      & > :nth-child(5) {
        margin-left: 0.5rem;
        color: #6a737c;
      }
    }
  }
`;

export const MainContainer = styled.main`
  display: flex;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: start;
    width: 100%;
    & > ul {
      width: 100%;
    }

    aside {
      border-right: 1px solid #f1e6bb;
      border-left: 1px solid #f1e6bb;
      border-bottom: 1px solid #f1e6bb;
      margin-left: 2rem;
      margin-top: 1rem;
      border-radius: 5px;

      & > :first-child {
        border-radius: 5px 5px 0 0;
      }

      & > :last-child {
        border-radius: 0 0 5px 5px;
      }

      h4 {
        background: #fcf3d5;
        border-bottom: 1px solid #f1e6bb;
        border-top: 1px solid #f1e6bb;
        padding: 0.5rem;
        color: #525960;
      }

      div {
        background: #fdf7e2;
        padding: 0.5rem;

        p {
          padding-bottom: 0.5rem;
          color: #3b4044;
        }
      }
    }
  }
`;

export const VoteContainer = styled.div`
  margin-right: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  & > p {
    color: #3b4045;
    font-size: 1.25rem;
    margin: 0.5rem 0;
  }
`;

export const VoteButton = styled.button`
  border-radius: 50%;
  border: 1px solid #e3e6e8;
  background-color: white;
  height: 2.5rem;
  width: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const QuestionContainer = styled.section`
  padding-top: 1rem;
  display: flex;
  justify-content: start;
  align-items: start;
  font-size: 1rem;
`;

export const QuestionContent = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  min-width: 41.5rem;
  max-width: 41.5rem;
`;

export const QuestionInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-top: 3rem;
  font-size: 0.875rem;

  & > * {
  }

  & > :first-child {
    & > :first-child {
      color: #6a737c;
      margin-right: 1rem;
      vertical-align: top;
    }

    & a {
      border: none;
      color: #6a737c;
      background: none;
      vertical-align: top;
      font-size: 0.875rem;
      font-weight: 400;
      cursor: pointer;
    }
  }
`;

export const AuthorContainer = styled.section`
  background: #d9eaf7;
  border-radius: 3px;
  padding: 0.5rem;
  width: 200px;

  & > :first-child {
    color: #3b4045;
    margin-bottom: 0.25rem;
  }

  & > :nth-child(2) {
    display: flex;
    justify-content: start;
    align-items: start;

    & > svg {
      height: 2.25rem;
      border-radius: 3px;
      margin-right: 0.25rem;
    }

    & > a {
      color: #0074cc;
    }
  }
`;
