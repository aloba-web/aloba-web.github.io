import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import {
  About,
  Contact,
  Faq,
  Home,
  Product,
  Products,
  Recipe,
  Recipes,
  Stores,
  What,
} from "./pages";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/faq" component={Faq} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={Product} />
        <Route exact path="/stores" component={Stores} />
        <Route exact path="/what" component={What} />
        <Route exact path="/recipes" component={Recipes} />
        <Route exact path="/recipes/:id" component={Recipe} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
