import { UserMenu } from 'components/UserMenu/UserMenu';
import { Link } from './Navigation.styled';

import { useLocation } from 'react-router-dom';

export const PrivateNavigation = () => {
  const location = useLocation();

  return (
    <>
      <UserMenu />
      <nav>
        <Link to="/contacts" state={location}>
          My contats
        </Link>
      </nav>
    </>
  );
};
