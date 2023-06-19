import React, { useState } from 'react';
import {
  Header,
  Container,
  LogoBox,
  LogoBox2,
  Logo,
  Logo2,
  InputWrap,
  InputStyles,
  NavMenu,
  SearchImg,
} from '../styles';
// import Dropdown from '../components/Dropdown';

function GNB() {
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Header>
      <Container>
        <LogoBox>
          <Logo src="/header_svg/logo.svg" alt="logo" />
        </LogoBox>
        <LogoBox2>
          <Logo2 src="/header_svg/slogo.svg" alt="logo2" />
        </LogoBox2>
        <InputWrap>
          <SearchImg src="/header_svg/search.svg" />
          <form>
            <InputStyles
              type="text"
              placeholder="Search..."
              value={input}
              onChange={handleChange}
            />
          </form>
        </InputWrap>
        <NavMenu>
          <li onClick={() => setIsOpen(!isOpen)}>
            <img src="/header_svg/message.svg" />
            {/* {isOpen ? <Dropdown /> : <></>} */}
          </li>
          <li>
            <img src="/header_svg/cup.svg" />
          </li>
          <li>
            <img src="/header_svg/help.svg" />
          </li>
          <li>
            <img src="/header_svg/list.svg" />
          </li>
        </NavMenu>
      </Container>
    </Header>
  );
}

export default GNB;
