import { Side, SideContainer, Nav, NavOl, NavLi } from '../styles';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function GSB() {
  const [selectedItem, setSelectedItem] = useState(0);
  const navigate = useNavigate();
  const handleClick = (index: number) => {
    if (index === 0) {
      navigate('/');
    } else if (index === 1) {
      navigate('/board');
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
