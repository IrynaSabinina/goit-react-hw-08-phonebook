import { Link, List } from './Navigation.styled';

export const PublicNavigation = () => {
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
