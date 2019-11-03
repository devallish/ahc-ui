import React from "react";
import { Switch, Route } from "react-router";
import RouteInfo from "../../shared/routes/route-info";

interface RoutesProps{
  routes: RouteInfo[]
}

const Routes = (props: RoutesProps) => {
  return (
    <Switch>
      {props.routes.map((route, index) => (
        <Route key={index} path={route.path} exact={route.exact} component={route.component} />
      ))}
    </Switch>
  );
};

export default Routes;
