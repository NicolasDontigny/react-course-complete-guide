import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store';
import classes from './Header.module.css';

const Header = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const userEmail = useSelector((state) => state.auth.email);

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <header className={classes.header}>
      <div className={classes['header-left']}>
        <h1>Redux Auth</h1>
        {userEmail && <span>Welcome, {userEmail}!</span>}
      </div>
      <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            {isAuthenticated && <button onClick={logoutHandler}>Logout</button>}
            {!isAuthenticated && <button>Login</button>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
