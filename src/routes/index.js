import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../components/Home";

function Routes() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default Routes;