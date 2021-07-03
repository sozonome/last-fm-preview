import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Suspense } from "react";

import Layout from "components/layout";
import PrivateRoute from "components/route/PrivateRoute";
import Page404 from "components/404";

import { privateRoutes, routes } from "routes";

const App = () => {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<></>}>
          <Switch>
            {routes.map((routeProps, index) => (
              <Route exact {...routeProps} key={index} />
            ))}
            {privateRoutes.map((privateRouteProps, index) => (
              <PrivateRoute
                {...privateRouteProps}
                key={`privateRoute-${index}`}
              />
            ))}
            <Route component={Page404} />
          </Switch>
        </Suspense>
      </Layout>
    </Router>
  );
};

export default App;
