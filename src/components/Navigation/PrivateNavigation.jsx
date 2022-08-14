import { UserMenu } from 'components/UserMenu/UserMenu';
import { Link } from './Navigation.styled';
import { useSelector } from 'react-redux';
import { tokenAuthSeletor } from 'redux/selectors';
import { useLocation } from 'react-router-dom';

export const PrivateNavigation = () => {
  const location = useLocation();

  return (
    <nav>
      <UserMenu />
      <Link to="/contacts" state={location}>
        My contats
      </Link>
    </nav>
  );
};
