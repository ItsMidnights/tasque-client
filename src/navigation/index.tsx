import React from "react";
import { Home, SignIn, SignUp } from "@views";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Navigation = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/login">
          <SignIn />
        </Route>
        <Route path="/register">
          <SignUp />
        </Route>
      </Switch>
    </Router>
  );
};

export default Navigation;
