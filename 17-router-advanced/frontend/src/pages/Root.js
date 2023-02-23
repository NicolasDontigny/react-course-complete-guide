import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';
import classes from './Root.module.css';

export const RootLayout = () => (
  <>
    <MainNavigation></MainNavigation>
    <main className={classes['main-content']}>
      <Outlet></Outlet>
    </main>
  </>
);
