import { Side, SideContainer, Nav, NavOl, NavLi } from '../styles';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../store/RootStore';
import { setTab } from '../../../pages/MyPage/store/TabStore';

function GSB() {
  const user = useSelector((state: RootState) => state.userInfo);

  const dispatch = useDispatch();

  const [selectedItem, setSelectedItem] = useState(0);
  const navigate = useNavigate();
  const handleClick = (index: number) => {
    if (index === 0) {
      navigate('/');
    } else if (index === 1) {
      navigate('/board');
    } else if (index === 3) {
      if (user.memberId) {
        navigate(`/mypage/${user.memberId}/${user.name}/profile`);
        dispatch(setTab('Profile'));
      }
    }
    setSelectedItem(index);
  };

  return (
    <Side>
      <SideContainer>
        <Nav>
          <NavOl>
            <NavLi onClick={() => handleClick(0)} selected={selectedItem === 0}>
              <a>Home</a>
            </NavLi>
            <li>
              <ol>
                <li>PUBLIC</li>
                <NavLi
                  onClick={() => handleClick(1)}
                  selected={selectedItem === 1}
                >
                  <a>Questions</a>
                </NavLi>
                <NavLi
                  onClick={() => handleClick(2)}
                  selected={selectedItem === 2}
                >
                  <a>Tags</a>
                </NavLi>
                <NavLi
                  onClick={() => handleClick(3)}
                  selected={selectedItem === 3}
                >
                  <a>Users</a>
                </NavLi>
                <NavLi
                  onClick={() => handleClick(4)}
                  selected={selectedItem === 4}
                >
                  <a>Companies</a>
                </NavLi>
              </ol>
            </li>
          </NavOl>
        </Nav>
      </SideContainer>
    </Side>
  );
}

export default GSB;
