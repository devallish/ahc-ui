
interface RouteInfo {
  name: string;
  exact: boolean;
  path: string;
  component: () => JSX.Element;
}
export default RouteInfo;