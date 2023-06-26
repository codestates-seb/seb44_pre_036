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
  NavMenu2,
  SearchImg,
  UserImg,
  LoginBtn,
  SignBtn,
} from '../styles';
import Dropdown from '../components/Dropdown';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/RootStore';

function GNB() {
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState<number | null>(null);
  const navigate = useNavigate();

  const user = useSelector((state: RootState) => state.userInfo);
  const isLogin = user.memberId !== 0;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const handleClick = (id: number) => {
    setIsOpen((prevId) => (prevId === id ? null : id)); // 클릭한 li 요소의 Id를 toggle하여 열고 닫음
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
        {isLogin ? (
          <>
            <NavMenu>
              <li
                onClick={() => {
                  navigate(`/mypage/${user.memberId}/${user.name}/profile`);
                }}
              >
                <UserImg>
                  {user.profileImageUrl ? (
                    <img src={user.profileImageUrl} alt="user" />
                  ) : (
                    <img src="/header_svg/user.svg" alt="user" />
                  )}
                </UserImg>
              </li>
              <li onClick={() => handleClick(1)}>
                <img src="/header_svg/message.svg" alt="message" />
              </li>
              <li onClick={() => handleClick(2)}>
                <img src="/header_svg/cup.svg" alt="cup" />
              </li>
              <li onClick={() => handleClick(3)}>
                <img src="/header_svg/help.svg" alt="help" />
              </li>

              <li onClick={() => handleClick(4)}>
                <img src="/header_svg/list.svg" alt="list" />
              </li>
            </NavMenu>
            {isOpen === 1 ? <Dropdown Id={1} /> : null}
            {isOpen === 2 ? <Dropdown Id={2} /> : null}
            {isOpen === 3 ? <Dropdown Id={3} /> : null}
            {isOpen === 4 ? <Dropdown Id={4} /> : null}
          </>
        ) : (
          <>
            <NavMenu2>
              <li>
                <LoginBtn onClick={() => navigate('/login')}>Login</LoginBtn>
              </li>
              <li>
                <SignBtn onClick={() => navigate('/signup')}>SignUp</SignBtn>
              </li>
            </NavMenu2>
          </>
        )}
      </Container>
    </Header>
  );
}

export default GNB;
