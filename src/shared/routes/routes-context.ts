import { useContext, createContext } from "react";
import { routes } from "./routes";

export const RoutesContext = createContext(routes);

export function useRoutesContext() {
  return useContext(RoutesContext) 
}