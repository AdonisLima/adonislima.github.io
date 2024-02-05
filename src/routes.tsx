import { lazy, Suspense } from "react";
import { type RouteObject } from "react-router-dom";

const Home = lazy(() => import("@/pages/home"));
const Notfound = lazy(() => import("@/pages/404"));

export const routes: Array<RouteObject> = [
  {
    path: "/",
    element: (
      <Suspense>
        <Home />
      </Suspense>
    ),
  },
  {
    path: "*",
    element: (
      <Suspense>
        <Notfound />
      </Suspense>
    ),
  },
];

export default routes;
