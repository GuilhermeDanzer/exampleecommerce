import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer";
import "./index.scss";
import { Produto } from "./screens/Produto";
import {Pagamento} from './screens/Pagamento'
import Layout from "./layout/Layout";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const store = createStore(rootReducer);

const routing = (
  <Provider store={store}>
    <Router>
      <Switch>
        <Layout>
          <Route exact path="/" component={Produto} />
          <Route path="/pagamento" component={Pagamento} />
        </Layout>
      </Switch>
    </Router>
  </Provider>
);

ReactDOM.render(routing, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
