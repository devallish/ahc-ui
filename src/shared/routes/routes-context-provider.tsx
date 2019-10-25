import React, { ReactNode } from "react";
import { RoutesContext } from "./routes-context";
import { routes } from "./routes";

interface RoutesContextProvider {
  children: ReactNode;
}
const RoutesContextProvider = (props: RoutesContextProvider) => {
  return <RoutesContext.Provider value={routes}>{props.children}</RoutesContext.Provider>;
};

interface RoutesContextProvider {
  children: ReactNode;
}
export default RoutesContextProvider;
