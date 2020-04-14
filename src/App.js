import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import News from "./pages/News";
import Brand from "./pages/Brand";
import Product from "./pages/Product";
import BrandNew from "./pages/BrandNew";
import Course from "./pages/Course";
import About from "./pages/About";
import Ticket from "./pages/User/Coupon";
import User from "./pages/User";
import Wishlist from "./pages/User/Wishlist";
import Cart from "./pages/Cart";

function App() {
  return (
    <Router>
      <Header />
      <Footer />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/News">
          <News />
        </Route>
        <Route path="/About">
          <About />
        </Route>
        <Route path="/Brands">
          <Brand />
        </Route>
        <Route path="/Skateboards">
          <Product />
        </Route>
        <Route path="/Clothing">
          <Product />
        </Route>
        <Route path="/Shoes">
          <Product />
        </Route>
        <Route path="/Accessories">
          <Product />
        </Route>
        <Route path="/BrandNew">
          <BrandNew />
        </Route>
        <Route path="/Course">
          <Course />
        </Route>
        <Route exact path="/User/Coupon">
          <Ticket />
        </Route>
        <Route exact path="/User">
          <User />
        </Route>
        <Route exact path="/User/Wishlist">
          <Wishlist />
        </Route>
        <Route exact path="/Cart">
          <Cart />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
