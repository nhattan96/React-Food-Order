import React, { useState, Fragment } from 'react'
import Cart from './components/Cart/Cart';
import Header from "./components/Layout/Header/Header";
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false)

  const showCartHandler = () => {
    setCartIsShown((prev) => !prev)
  }

  return (
    // <Fragment>
    <CartProvider>
      {cartIsShown && <Cart onClose={showCartHandler}></Cart>}
      <Header onShownCart={showCartHandler}></Header>
      <main>
        <Meals></Meals>
      </main>

    </CartProvider>
    // </Fragment>
  );
}

export default App;
