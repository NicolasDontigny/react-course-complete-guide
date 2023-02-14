import React, { useContext } from 'react';
import AuthContext from './store/auth-context';

import Home from './components/Home/Home';
import Login from './components/Login/Login';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  const ctx = useContext(AuthContext);

  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Infinite loop
  // if (isLoggedInLocalStorage) {
  //   setIsLoggedIn(true);
  // }

  return (
    <React.Fragment>
      <MainHeader onLogout={ctx.onLogout} />
      <main>
        {!ctx.isLoggedIn && <Login onLogin={ctx.onLogin} />}
        {ctx.isLoggedIn && <Home onLogout={ctx.onLogout} />}
      </main>
    </React.Fragment>
  );
}

export default App;
