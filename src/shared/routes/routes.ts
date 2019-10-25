import Home from "../../pages/home/home";
import Practice from "../../pages/practice/practice";

export const routes = [
  {name: "Home", exact: true, path: "/", component: Home},
  {name: "Practice", exact: false, path: "/practice", component: Practice},
  
]