import Home from "../../pages/home/home";
import Practice from "../../pages/practice/practice";
import RouteInfo from "./route-info";

export const mainRoutes: RouteInfo[] = [
  {name: "Home", exact: true, path: "/", component: Home},
  {name: "Practice", exact: false, path: "/practice", component: Practice},
]