import { Navigation } from 'components/Navigation/Navigation';
import { HomePage } from 'pages/HomePage/HomePage';

import { Outlet } from 'react-router';

import { Main } from './Main/Main';
import { Sidebar } from './Sidebar/Sidebar';

export const Layout = () => {
  return (
    <>
      <Main>
        <Sidebar>
          <Navigation />
        </Sidebar>
        <HomePage />
      </Main>
    </>
  );
};
