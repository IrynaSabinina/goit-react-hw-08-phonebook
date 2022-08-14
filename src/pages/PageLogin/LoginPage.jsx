import styles from '../../components/Form/Form.module.css';
import { GoHome } from '../../components/Navigation/GoHome';
import { useState } from 'react';
import { loginThunk } from 'redux/login/loginThunks';
import { useDispatch } from 'react-redux';
import { loginUserFunc } from 'API/users-api';

export const LoginPage = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = event => {
    const { value, name } = event.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const handlLogin = event => {
    event.preventDefault();
    console.log(values);
    dispatch(loginThunk(values));
  };

  return (
    <>
      <form className={styles.form} onSubmit={handlLogin}>
        <label className={styles.inputIn}>
          mail
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
          />
        </label>
        <label className={styles.inputIn}>
          Pasword
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleInputChange}
          />
        </label>
        <button className={styles.btnAdd} type="submit">
          Log in
        </button>
      </form>
      <GoHome />
    </>
  );
};
