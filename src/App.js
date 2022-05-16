import React, { useState, Fragment } from 'react'
import Cart from './components/Cart/Cart';
import Header from "./components/Layout/Header/Header";
import Meals from './components/Meals/Meals';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false)

  const showCartHandler = () => {
    setCartIsShown((prev) => !prev)
  }

  return (
    <Fragment>
      {cartIsShown && <Cart onClose={showCartHandler}></Cart>}
      <Header onShownCart={showCartHandler}></Header>
      <main>
        <Meals></Meals>
      </main>
    </Fragment>
  );
}

export default App;
