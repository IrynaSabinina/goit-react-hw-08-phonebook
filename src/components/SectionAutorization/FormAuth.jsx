import styles from '../Form/Form.module.css';
import { GoHome } from 'components/Navigation/GoHome';
import { useState } from 'react';
import { createUserFunc } from 'API/users-api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const FormAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleInputChange = event => {
    const { value, name } = event.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const handlSubmitNewUser = event => {
    event.preventDefault();
    setIsLoading(true);
    createUserFunc(values)
      .then(() => {
        toast.success('Tnack you for registration');
      })
      .catch(error => {
        toast.error('Sorry, try again');
      })
      .finally(() => {
        setIsLoading(false);
      });
    setValues({ name: '', email: '', password: '' });
  };

  return (
    <>
      <form className={styles.form} onSubmit={handlSubmitNewUser}>
        <label className={styles.inputIn}>
          Login
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleInputChange}
            placeholder="enter your user name"
          />
        </label>
        <label className={styles.inputIn}>
          mail
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
            placeholder="enter your email"
          />
        </label>
        <label className={styles.inputIn}>
          Pasword
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleInputChange}
            placeholder="minimum 7 points"
          />
        </label>
        <button className={styles.btnAdd} disabled={isLoading} type="submit">
          {isLoading ? 'waiting piease' : 'Sing in'}
        </button>
      </form>
      <GoHome />
    </>
  );
};
