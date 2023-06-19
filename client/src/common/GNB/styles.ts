import styled from 'styled-components';

export const Header = styled.div`
  width: 100%;
  background-color: aliceblue;
`;

export const Container = styled.div`
  width: 97.2307692rem;
  max-width: 100%;
  margin: 0 auto;
  height: 60px;
  display: flex;
  align-items: center;
  background-color: aliceblue;
`;
export const LogoBox = styled.div`
  display: flex;
  justify-content: center;
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
  margin-top: 5px;
  cursor: pointer;
  &:hover {
    background-color: #cecece;
  }
  @media screen and (min-width: 600px) {
    display: none;
  }
`;

export const Logo = styled.img`
  height: 90%;
`;
export const Logo2 = styled.img`
  height: 80%;
`;

export const InputWrap = styled.div`
  position: relative;
  margin-left: 15px;
  margin-right: 20px;
  width: 100%;
`;
export const SearchImg = styled.img`
  display: inline;
  position: absolute;
  top: 7px;
  left: 14px;
`;

export const InputStyles = styled.input`
  width: 100%;
  border: 1px solid #d1d1d3;
  outline: none;
  font-size: 18px;
  border-radius: 20px;
  line-height: 30px;
  padding: 5px 12px;
  padding-left: 50px;
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
  li {
    margin: 2px;
    cursor: pointer;
    &:hover {
      background-color: #cecece;
    }
  }
  @media screen and (max-width: 600px) {
    display: none;
  }
`;
