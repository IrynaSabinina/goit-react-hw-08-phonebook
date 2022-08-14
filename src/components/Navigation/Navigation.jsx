import { PublicNavigation } from './PublicNavigation';
import { PrivateNavigation } from './PrivateNavigation';
import { tokenAuthSeletor } from 'redux/selectors';
import { useSelector } from 'react-redux';
export const Navigation = () => {
  const isAuth = useSelector(tokenAuthSeletor);
  console.log(isAuth);
  return isAuth ? <PrivateNavigation /> : <PublicNavigation />;
};
