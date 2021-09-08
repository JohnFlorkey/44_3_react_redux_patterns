import React from "react";
import { Redirect, Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/products/:id">
          <ProductDetail />
        </Route>
        <Route exact path="/">
          <ProductList />
        </Route>
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
