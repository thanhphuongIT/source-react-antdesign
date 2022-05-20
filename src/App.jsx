import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { IntlProvider } from "react-intl";
// import { Provider } from "react-redux";
import "./App.css";
import ROUTES from "utils/routes";
import history from "./helper/history";
// const store = configureStore()
// REDUX
// Import store and wrap app with redux provider
// import store from './store'

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          {ROUTES.map((route) => {
            return (
              <Route
                key={route.path}
                exact={route.exact}
                path={route.path}
                component={route.component}
              />
            );
          })}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
