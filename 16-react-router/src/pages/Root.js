import React from 'react';
import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/Layout/MainNavigation';
import classes from './Root.module.css';

const RootLayout = () => (
  <React.Fragment>
    <MainNavigation />
    <main className={classes.content}>
      <Outlet></Outlet>
    </main>
  </React.Fragment>
);

export default RootLayout;
