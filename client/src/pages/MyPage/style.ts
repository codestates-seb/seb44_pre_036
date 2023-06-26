import styled from 'styled-components';

export const Page = styled.main`
  padding: 1rem 0 0 1rem;
  font-size: 0.875rem;
  width: 65rem;
`;

export const HeaderContainer = styled.header`
  display: flex;
  height: 9rem;
  margin-bottom: 1rem;
  & :first-child {
    border-radius: 5px;
    height: 8rem;
    margin-right: 1rem;
  }

  & :nth-child(2) {
    display: flex;
    flex-direction: column;
    h1 {
      font-size: 1.5rem;
      font-weight: 400;
      margin: 1rem 0;
      height: 1.5rem;
    }

    p {
      font-size: 0.875rem;
      font-weight: 400;
      margin-bottom: 0.5rem;
      height: 0.875rem;
      color: #6a737c;
    }
  }
`;

export const TabContainer = styled.section`
  display: flex;
  margin-bottom: 1.5rem;
`;

export const TabButton = styled.button`
  height: 1.875rem;
  border: none;
  font-size: 0.875rem;
  color: #6a737c;
  cursor: pointer;
  padding: 0 0.625rem;
  background: #ffffff;
  border-radius: 20px;
  margin-right: 0.5rem;

  &:hover {
    background: #e4e5e7;
    color: #525960;
  }

  &.current {
    background: #f48225;
    color: #ffffff;

    &:hover {
      background: #da690b;
      color: #ffffff;
    }
  }
`;

export const MainContainer = styled.main``;

export const ProfileContainer = styled.section`
  > h1 {
    font-size: 1.25rem;
    font-weight: 400;
    margin-bottom: 0.5rem;
  }

  > p {
    border: 1px solid #e4e5e7;
    padding: 1rem;
    border-radius: 5px;
  }
`;

export const ActivityContainer = styled.section`
  > div {
    margin-bottom: 1.5rem;

    > h1 {
      font-size: 1.25rem;
      font-weight: 400;
      margin-bottom: 0.5rem;
    }

    > div {
      border: 1px solid #e4e5e7;
      padding: 1rem;
      border-radius: 5px;

      > a {
        color: black;
        > div {
          border: 1px solid #e4e5e7;
          padding: 1rem;
          border-radius: 5px;
        }
      }
    }
  }
`;

export const LogoutBtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const LogoutBtn = styled.button`
  justify-content: center;
  align-items: center;
  width: 50%;
  border: none;
  height: 30px;
`;
