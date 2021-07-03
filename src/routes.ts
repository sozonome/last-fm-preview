import { lazy } from "react";
import { RouteProps } from "react-router-dom";

const Home = lazy(() => import("components/home"));

export const routes: Array<RouteProps> = [
  {
    path: "/",
    component: Home,
  },
];

export const privateRoutes: Array<RouteProps> = [];
