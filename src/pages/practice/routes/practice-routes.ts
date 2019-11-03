import PracticeList from "../practice-list/practice-list";
import PracticeEdit from "../practice-edit/practice-edit";
import PracticeView from "../practice-view/practice-view";
import RouteInfo from "../../../shared/routes/route-info";

export const practiceRoutes : RouteInfo[] = [
  {name: "Search", exact: false, path: "/practice", component: PracticeList},
  {name: "Search", exact: false, path: "/practice/search", component: PracticeList},
  {name: "Practice Edit", exact: false, path: "/practice/:id/edit", component: PracticeEdit},
  {name: "Practice", exact: false, path: "/practice/:id", component: PracticeView}
]