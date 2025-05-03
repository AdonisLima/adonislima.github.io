import { Fragment } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { ResetStyle } from "../../styles/reset";
import { GlobalStyle } from "../../styles/global";

export default function App() {
  return (
    <Fragment>
      <ResetStyle />
      <GlobalStyle />
      <Outlet />
      <ScrollRestoration />
    </Fragment>
  );
}
