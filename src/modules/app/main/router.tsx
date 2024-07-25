import { createBrowserRouter } from "react-router-dom";
import App from "../presentation/pages/app";
import routes from "./routes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: routes,
    errorElement: <div>error</div>,
  },
]);
