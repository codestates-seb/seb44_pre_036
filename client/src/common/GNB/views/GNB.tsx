import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  List,
} from '../styles';
import Dropdown from '../components/Dropdown';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/RootStore';

function GNB() {
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const user = useSelector((state: RootState) => state.userInfo);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Header>
      <Container>
        <LogoBox onClick={() => navigate('/')}>
          <Logo src="/header_svg/logo.svg" alt="logo" />
        </LogoBox>
        <LogoBox2 onClick={() => navigate('/')}>
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
          <li
            onClick={() =>
              navigate(`/mypage/${user.memberId}/${user.name}/profile`)
            }
          >
            <img src="/header_svg/user.svg" alt="user" />
          </li>
          <li>
            <img src="/header_svg/logout.svg" alt="logout" />
          </li>
        </NavMenu>
        <List onClick={() => handleClick()}>
          <img src="/header_svg/list.svg" />
          {isOpen ? <Dropdown /> : null}
        </List>
      </Container>
    </Header>
  );
}

export default GNB;
