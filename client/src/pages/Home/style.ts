import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Page = styled.main`
  padding-top: 1rem;
  font-size: 0.875rem;
  width: 65rem;
`;

export const HeaderContainer = styled.header`
  padding-left: 1rem;
  padding-bottom: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid #e3e6e8;
  width: 43rem;

  & > :first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 2rem;

    & > :first-child {
      color: #232629;
      font-weight: 400;
      font-size: 2rem;
    }
  }

  & > :nth-child(2) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.25rem;
  }
`;

export const FilterContainer = styled.section`
  display: flex;

  & > :first-child {
    height: 2.25rem;
    border-radius: 3px 0 0 3px;
    border: 1px solid #9fa6ad;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.875rem;
    color: #6a737c;
    cursor: pointer;
    border-right: 1px solid #9fa6ad;
    padding: 0 0.625rem;
    background: #ffffff;

    &:hover {
      background: #f8f9f9;
      color: #525960;
    }

    &:active {
      background: #f1f2f3;
    }
  }

  & > :nth-child(2) {
    height: 2.25rem;
    border-radius: 0 3px 3px 0;
    border: 1px solid #9fa6ad;
    border-left: none;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 0.875rem;
    color: #6a737c;
    cursor: pointer;
    border-right: 1px solid #9fa6ad;
    padding: 0 0.625rem;
    background: #ffffff;

    &:hover {
      background: #f8f9f9;
      color: #525960;
    }

    &:active {
      background: #f1f2f3;
    }
  }

  & .current {
    background: #e3e6e8;
    color: #3b4045;

    &:hover {
      background: #e3e6e8;
      color: #3b4045;
    }
  }
`;

export const ListContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

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

export const ListItemContainer = styled.li`
  list-style: none;
  display: flex;
  border-bottom: 1px solid #e3e6e8;
  padding: 1rem;
`;

export const LeftSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
  width: 6.75rem;
  margin-right: 1rem;

  & > * {
    display: flex;
    margin-bottom: 0.2rem;
  }
`;

export const RightSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 100%;
`;

export const ContentSection = styled.section`
  margin-bottom: 1rem;

  & :first-child {
    font-size: 1.125rem;
    color: #0074cc;
    cursor: pointer;
    margin-bottom: 0.5rem;

    &:hover {
      color: #0a95ff;
    }
  }

  & :nth-child(2) {
    color: #3b4045;
  }
`;

export const AuthorSection = styled.section`
  display: flex;
  justify-content: end;

  & > a {
    display: flex;
    justify-content: end;

    & > svg {
      height: 1rem;
      margin-right: 0.25rem;
      border-radius: 3px;
    }

    & :nth-child(2) {
      margin-right: 0.25rem;
      color: #0074cc;
      cursor: pointer;

      &:hover {
        color: #0a95ff;
      }
    }
  }

  & :nth-child(2) {
    color: #6c757e;
  }
`;

export const PaginationContainer = styled.div`
  margin: 2rem 0;
  display: flex;
  justify-content: space-around;
  max-width: 42.247rem;
`;
