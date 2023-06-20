import styled from 'styled-components';

export const Page = styled.main`
  padding-top: 1rem;
  font-size: 0.875rem;
  max-width: 1100px;
`;

export const HeaderContainer = styled.header`
  padding-left: 1rem;
  padding-bottom: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid #e3e6e8;

  & > :first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 2rem;

    & > :first-child {
      color: #3b4045;
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
