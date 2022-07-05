import { useState } from 'react';

import { Fragment } from 'react';
import MainLayout from './components/layout/MainLayout';

import './App.css';
import Home from './pages/Home';
import CartProvider from './store/CartProvider';
import Cart from './components/Cart/Cart';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    console.log("hello");
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <Fragment>
      <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <MainLayout onShowCart={showCartHandler}>
        <Home />
      </MainLayout>
      </CartProvider>
    </Fragment>
  );
}

export default App;
