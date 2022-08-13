import { Outlet } from 'react-router';

export const HomePage = () => {
  return (
    <>
      <p>
        Hello! Welcome to super pupper aplication My Phonbook! Please create you
        accout or Login!
      </p>
      <Outlet />
    </>
  );
};
