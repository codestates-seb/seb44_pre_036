import { Link } from 'react-router-dom';
import { HeaderContainer } from '../style';
import { item } from '../type';
import { BlueButton } from '../../../common/style';

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
        <Link to="/ask">
          <BlueButton>Ask Question</BlueButton>
        </Link>
      </section>
    </HeaderContainer>
  );
};

export default Header;
