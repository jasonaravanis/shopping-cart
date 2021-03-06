import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Shop from "./components/Shop";
import Cart from "./components/Cart";

const appStyles = {
  primaryColor: "rgb(252, 252, 252)",
  fontSecondaryColor: "rgb(51, 51, 51)",
};

const AppContainer = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    console.log("UPDATING CART FROM APP");
    console.log(cart);
  }, [cart]);

  const removeCartItem = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };
  return (
    <AppContainer>
      <BrowserRouter>
        <Header appStyles={appStyles} />
        <Switch>
          <Route
            exact
            path="/shopping-cart"
            render={(appStyles) => <Home appStyles={appStyles} />}
          />
          <Route path="/shop">
            <Shop setCart={setCart} />
          </Route>
          <Route exact path="/about" component={About} />
          <Route
            exact
            path="/cart"
            render={() => <Cart cart={cart} removeCartItem={removeCartItem} />}
          />
        </Switch>
        <Footer />
      </BrowserRouter>
    </AppContainer>
  );
}

export default App;
