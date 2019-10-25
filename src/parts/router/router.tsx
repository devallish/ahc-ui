import React from "react";
import { Switch, Route } from "react-router";
import { useRoutesContext } from "../../shared/routes/routes-context";

const Router = () => {
  const routing = useRoutesContext();
  return (
    <Switch>
      {routing.map((route, index) => (
        <Route key={index} path={route.path} exact={route.exact} component={route.component} />
      ))}
    </Switch>
  );
};

export default Router;
