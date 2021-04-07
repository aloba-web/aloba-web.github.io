import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import CookiePolicy from "./components/CookiePolicy";
import ScrollToTop from "./utils/ScrollToTop";
import { ReactComponent as Spinner} from "./assets/spinner.svg";
import "./index.scss";

const About = lazy(() => import("./pages/About/About"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const Faq = lazy(() => import("./pages/Faq/Faq"));
const Home = lazy(() => import("./pages/Home/Home"));
const Product = lazy(() => import("./pages/Product/Product"));
const Products = lazy(() => import("./pages/Products/Products"));
const Recipe = lazy(() => import("./pages/Recipe/Recipe"));
const Recipes = lazy(() => import("./pages/Recipes/Recipes"));
const Stores = lazy(() => import("./pages/Stores/Stores"));

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Suspense fallback={<Spinner />}>
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/faq" component={Faq} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/:id" component={Product} />
          <Route exact path="/stores" component={Stores} />
          <Route exact path="/recipes" component={Recipes} />
          <Route exact path="/recipes/:id" component={Recipe} />
        </Switch>
      </Suspense>
    </Router>
    <CookiePolicy />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
