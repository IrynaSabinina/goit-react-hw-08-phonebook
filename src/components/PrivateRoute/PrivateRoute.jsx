import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { tokenAuthSeletor } from 'redux/selectors';

export const PrivateRoute = ({ children }) => {
  const token = useSelector(tokenAuthSeletor);
  console.log(token);
  return token ? children : <Navigate to="/goit-react-hw-08-phonebook" />;
};
