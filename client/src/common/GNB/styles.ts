import styled from 'styled-components';

export const Header = styled.div`
  position: sticky;
  top: 0;
  background: white;
  width: 100%;
  border-bottom: 1px solid #d4d4d4;
  border-top: 3px solid #fe7214;
`;

export const Container = styled.div`
  background: white;
  width: 79rem;
  max-width: 100%;
  margin: 0 auto;
  height: 52px;
  display: flex;
  align-items: center;
`;
export const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  cursor: pointer;
  &:hover {
    background-color: #cecece;
  }
  @media screen and (max-width: 600px) {
    display: none;
  }
`;
export const LogoBox2 = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  margin-left: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  cursor: pointer;
  &:hover {
    background-color: #cecece;
  }
  @media screen and (min-width: 600px) {
    display: none;
  }
`;

export const Logo = styled.img`
  height: 100%;
`;
export const Logo2 = styled.img`
  height: 100%;
`;

export const InputWrap = styled.div`
  position: relative;
  margin-left: 15px;
  margin-right: 10px;
  width: 100%;
`;
export const SearchImg = styled.img`
  display: inline;
  position: absolute;
  top: 4px;
  left: 14px;
`;

export const InputStyles = styled.input`
  width: 100%;
  height: 80%;
  border: 1px solid #d1d1d3;
  outline: none;
  font-size: 18px;
  border-radius: 20px;
  line-height: 30px;
  padding: 5px 12px;
  padding-left: 45px;
  &:focus {
    border-color: #0969da;
    box-shadow: inset 0 0 0 1px #0969da;
    outline: none;
    /* box-shadow: 0 0 0 1px #1264a3, 0 0 0 5px rgba(29, 155, 209, 0.3); */
  }
`;

export const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  margin-right: 5px;
  height: 100%;
  li {
    display: flex;
    align-items: center;
    margin-left: 4px;
    margin-right: 4px;
    cursor: pointer;
    &:hover {
      background-color: #dfdfdf;
    }
    .active {
      display: none;
    }
  }
  img {
    width: 33px;
    height: 30px;
  }
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const List = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  margin-left: 5px;
  cursor: pointer;
  &:hover {
    background-color: #cecece;
  }
  @media screen and (min-width: 600px) {
    display: none;
  }
`;

export const UserImg = styled.div`
  display: flex;
  justify-content: center;
  width: 35px;
  height: 24px;
  img {
    border-radius: 3px;
    width: 24px;
    height: 100%;
  }
`;

export const NavMenu2 = styled.ul`
  list-style: none;
  display: flex;
  margin-right: 5px;
  height: 100%;
  li {
    display: flex;
    align-items: center;
    margin-left: 4px;
    margin-right: 4px;
    .active {
      display: none;
    }
  }
  img {
    width: 33px;
    height: 30px;
  }
`;

export const LoginBtn = styled.button`
  padding: 8px 10px;
  cursor: pointer;
  border: 1px solid #1567ff;
  border-radius: 3px;
  background-color: #b0deff;
  color: #399cff;
  font-weight: normal;
  &:hover {
    background-color: #73c4ff;
  }
`;

export const SignBtn = styled.button`
  padding: 8px 10px;
  cursor: pointer;
  border: 1px solid #1567ff;
  border-radius: 3px;
  background-color: #3179ff;
  color: #ffffff;
  font-weight: normal;
  &:hover {
    background-color: #0056f4;
  }
`;
