import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Store from '../pages/store';
import Orders from '../pages/myorders';
import Book from "../pages/bookdetail";
import NotFound from '../pages/NotFound';
import Cart from "../pages/cart";

const Routes = () => {
  return (
    <Router>
        <Switch>
          <Route path="/myorders" component={Orders} />
          <Route exact path="/" component={Store} />
          <Route path="/cart" component={Cart} />
          <Route path="/bookdetail" component={Book} />
          <Route path="*" component={NotFound} />
        </Switch>
    </Router>
  );
}

export default Routes;