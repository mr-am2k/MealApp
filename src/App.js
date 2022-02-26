import React, { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartPovider from "./store/CartProvied";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartPovider>
      {cartIsShown && <Cart onHideCart={hideCartHandler}/>}
      <Header onCartClick={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartPovider>
  );
}

export default App;
