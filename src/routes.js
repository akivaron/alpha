import React, { Suspense, Fragment, lazy } from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import LoadingScreen from "./containers/components/loading-screen";
import Layout from "./layout";

export const renderRoutes = (routes = []) => (
  <Suspense fallback={<LoadingScreen />}>
    <Switch>
      {routes.map((route, i) => {
        const Component = route.component;
        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            render={(props) => (
              <Fragment>
                <Layout>
                  <Component {...props} />
                </Layout>
              </Fragment>
            )}
          />
        );
      })}
    </Switch>
  </Suspense>
);

const routes = [
  {
    exact: true,
    path: "/404",
    component: lazy(() => import("./containers/components/not-found")),
  },
  {
    exact: true,
    path: "/loading",
    component: lazy(() => import("./containers/components/loading-screen")),
  },
  {
    path: "/",
    exact: true,
    component: lazy(() => import("./views/posts")),
  },
  {
    path: "*/*",
    exact: true,
    component: () => <Redirect to={"/404"} />,
  },
];

export default routes;
