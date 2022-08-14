import { Link, List } from './Navigation.styled';
import { useSelector } from 'react-redux';
import { tokenAuthSeletor } from 'redux/selectors';
import { useLocation } from 'react-router-dom';

export const PublicNavigation = () => {
  // const location = useLocation();

  return (
    <nav>
      <List>
        <li>
          <Link to="/register">Sing in</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </List>
    </nav>
  );
};
