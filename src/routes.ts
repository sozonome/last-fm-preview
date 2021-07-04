import { lazy } from "react";
import { RouteProps } from "react-router-dom";

const Home = lazy(() => import("components/home"));
const Artist = lazy(() => import("components/artist"));

export const routes: Array<RouteProps> = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/music/:artistName",
    component: Artist,
  },
  {
    path: "/music/:artistName/:trackName",
  },
];

export const privateRoutes: Array<RouteProps> = [];
