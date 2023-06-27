import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

function Layout() {
  return (
    <main>
      <Outlet />
      <Header />
    </main>
  );
}

export default Layout;
