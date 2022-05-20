import { HomePage, LoginPage } from "../pages";

const ROUTES = [
  {
    path: "/login",
    name: "Login Page",
    exact: true,
    component: LoginPage,
  },
  {
    path: "/",
    name: "Home Page",
    exact: true,
    component: HomePage,
  },
];

export default ROUTES;
