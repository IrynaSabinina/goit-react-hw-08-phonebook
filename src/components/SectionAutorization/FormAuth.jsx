import styles from '../Form/Form.module.css';
import { GoHome } from 'components/Navigation/GoHome';

export const FormAuth = () => {
  return (
    <>
      <form className={styles.form}>
        <label className={styles.inputIn}>
          Login
          <input type="text" name="login" value="" />
        </label>
        <label className={styles.inputIn}>
          mail
          <input type="email" name="email" value="" />
        </label>
        <label className={styles.inputIn}>
          Pasword
          <input type="password" name="password" value="" />
        </label>
        <button className={styles.btnAdd} type="submit">
          Create acount
        </button>
      </form>
      <GoHome />
    </>
  );
};
