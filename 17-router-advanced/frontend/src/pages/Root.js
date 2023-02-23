import { Outlet, useNavigation } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';
import classes from './Root.module.css';

export const RootLayout = () => {
  const navigation = useNavigation();
  return (
    <>
      <MainNavigation></MainNavigation>
      <main className={classes['main-content']}>
        {navigation.state === 'loading' && <p>Loading...</p>}
        <Outlet></Outlet>
      </main>
    </>
  );
};
