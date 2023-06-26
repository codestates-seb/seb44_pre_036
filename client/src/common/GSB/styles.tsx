import styled, { StyledComponentProps } from 'styled-components';

type NavLiProps = StyledComponentProps<
  'ol',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  any,
  { selected?: boolean },
  never
>;

export const NavLi = styled.li<NavLiProps>`
  /* 스타일 코드 */
  background-color: ${(props) => (props.selected ? '#efeeee' : 'transparent')};
  color: ${(props) => (props.selected ? 'black' : 'inherit')};
  font-weight: ${(props) => (props.selected ? 'bold' : 'transparent')};
`;

export const Side = styled.div`
  width: 158px;
  height: 100vh;
  border-right: 1px solid #d4d4d4;
  height: calc(100vh - 56px);
`;

export const SideContainer = styled.div`
  padding-top: 24px;
`;

export const Nav = styled.nav`
  display: block;
`;

export const NavOl = styled.ol<NavLiProps>`
  list-style: none;
  color: #8d8d8d;
  cursor: pointer;

  li {
    height: 34px;
  }

  li a {
    display: flex;
    align-items: center;
    font-size: 13px;
    height: 100%;
    margin-left: 5px;
    background-color: ${(props) =>
      props.selected ? '#d4d4d4' : 'transparent'};
    color: ${(props) => (props.selected ? 'black' : 'inherit')};
    font-weight: ${(props) => (props.selected ? 'bold' : 'transparent')};
  }

  li a:hover {
    color: #000000;
  }

  li ol li {
    list-style: none;
    margin-bottom: 4px;
    margin-top: 10px;
  }

  li ol > :first-child {
    margin-top: 16px;
    font-size: 11px;
    margin-left: 5px;
  }

  li:not(:first-child) a {
    padding: 4px;
    padding-left: 10px;
    font-size: 13px;
    line-height: 2px;
  }

  li:not(:first-child) li :hover {
    color: #000000;
  }
`;
