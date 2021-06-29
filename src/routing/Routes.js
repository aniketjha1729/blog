import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Write from "../pages/write/Write";
import Single from "../pages/Post/Single";
import PrivateRoutes from "./PrivateRoutes";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/posts">
        <Home />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/post/:id">
        <Single />
      </Route>
      <PrivateRoutes exact path="/write">
        <Write />
      </PrivateRoutes>
    </Switch>
  );
};

export default Routes;
