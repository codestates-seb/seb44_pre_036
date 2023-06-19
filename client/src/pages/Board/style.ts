import styled from 'styled-components';

export const Page = styled.main`
  padding: 1rem;
  font-size: 0.875rem;
  max-width: 1100px;
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
    }
  }
`;
