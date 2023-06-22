import { useNavigate } from 'react-router-dom';
import { Container, InBox } from './DropdownStyles';

function Dropdown() {
  const navigate = useNavigate();
  return (
    <Container>
      <InBox onClick={() => navigate('/mypage')}>MyPage</InBox>
      <InBox>Logout</InBox>
    </Container>
  );
}

export default Dropdown;
