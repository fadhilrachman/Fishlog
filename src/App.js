import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { AppRoutes } from './routes';

function App() {
  return (
    <Router>
      <Suspense fallback={<></>}>
        <Switch>
          {AppRoutes.map((route) => {
            const { component: Component, path, exact } = route;
            return (
              <Route
                key={path}
                path={path}
                exact={exact}
                render={(props) => <Component {...props} />}
              />
            );
          })}

          <Redirect from="*" to="/error-404" />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
