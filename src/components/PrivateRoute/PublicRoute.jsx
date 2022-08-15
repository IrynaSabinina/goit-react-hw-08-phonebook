import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { tokenAuthSeletor } from 'redux/selectors';

export const PublicRoute = ({ children }) => {
  const token = useSelector(tokenAuthSeletor);
  return !token ? children : <Navigate to="/contacts" />;
};
// console.log("jkjkj")
