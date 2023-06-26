import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: #262626;
`;
export const Box = styled.div`
  max-width: 1264px;
  width: 100%;
  margin: 0 auto;
  padding: 32px 12px 12px 12px;
  display: flex;
  flex-grow: row wrap;
`;

export const LogoBox = styled.div`
  flex: 0 0 64px;
  margin: -12px 0 32px 0;
  img {
    width: 32px;
    height: 30px;
    cursor: pointer;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex: 2 1 auto;
  flex-wrap: wrap;
`;

export const NavDiv = styled.div`
  padding: 0 12px 24px 0;
  flex: 1 0 auto;
  color: #adadad;
  box-sizing: border-box;
  ul {
    list-style: none;
  }
  a {
    display: inline-block;
    padding: 4px 0;
    text-decoration: none;
    cursor: pointer;
    font-weight: 300;
    font-size: 13px;
  }
  a:hover {
    color: #9d9d9d;
  }
  h5 {
    margin-bottom: 12px;
    font-weight: bold;
    cursor: pointer;
  }
`;

export const Site = styled.div`
  flex: 1 1 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #adadad;
  ul {
    display: flex;
    list-style: none;
  }
  ul li:not(:first-child) a {
    margin-left: 12px;
  }
  a {
    padding: 4px 0;
    text-decoration: none;
    cursor: pointer;
    font-weight: 200;
    font-size: 11px;
  }
  a:hover {
    color: #9d9d9d;
  }
  p {
    padding: 4px 0;
    text-decoration: none;
    font-weight: 200;
    font-size: 11px;
    margin-bottom: 24px;
  }
`;
