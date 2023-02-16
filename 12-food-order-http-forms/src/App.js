import { useContext, useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';
import AlertProvider, { AlertContext } from 'store/alert-context';

function App() {
  const alertContext = useContext(AlertContext);
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      {alertContext.alert && (
        <div className='alert success'>
          <span>{alertContext.alert.message}</span>
        </div>
      )}
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
