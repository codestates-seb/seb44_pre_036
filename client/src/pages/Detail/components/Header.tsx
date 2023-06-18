import { Link } from 'react-router-dom';
import { BlueButton, HeaderContainer } from '../style';
import { item } from '../type';

const Header = ({ item }: { item: item }) => {
  return (
    <HeaderContainer>
      <section>
        <h2>{item.title}</h2>
        <p>
          <span>Asked </span>
          <span>{item.date}</span>
        </p>
      </section>
      <section>
        <BlueButton>
          <Link to="/ask">Ask Question</Link>
        </BlueButton>
      </section>
    </HeaderContainer>
  );
};

export default Header;
