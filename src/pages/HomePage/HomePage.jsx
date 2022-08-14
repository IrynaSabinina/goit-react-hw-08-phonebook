import { useSelector } from 'react-redux';
import { Outlet } from 'react-router';
import { tokenAuthSeletor } from 'redux/selectors';

export const HomePage = () => {
  const isAuth = useSelector(tokenAuthSeletor);
  return !isAuth ? (
    <p>
      Hello! Welcome to super pupper aplication My Phonbook! Please create you
      accout or Login!
    </p>
  ) : (
    <></>
  );
};
