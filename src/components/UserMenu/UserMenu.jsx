import { useDispatch, useSelector } from 'react-redux';
import { userAuthSelector } from 'redux/selectors';
import { logoutThunk } from 'redux/login/loginThunks';

export const UserMenu = () => {
  const email = useSelector(userAuthSelector);
  const dispatch = useDispatch();
  const handleLogout = event => {
    event.preventDefault();
    dispatch(logoutThunk());
  };
  return (
    <>
      <p>{email}</p>
      <button type="button" onClick={handleLogout}>
        Log out
      </button>
    </>
  );
};
