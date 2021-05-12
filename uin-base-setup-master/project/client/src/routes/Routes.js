import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import Home from "../pages/Home";
import ProductPage from "../pages/ProductPage";
import CategoryPage from "../pages/CategoryPage";
import Navbar from "../components/Navigasjon/Navbar";
import SearchPage from "../pages/SearchPage";
import { SearchContext } from "../utils/SearchContext";
import { useState } from "react";
import Footer from "../components/Footer";

const Routes = () => {
  const [searchp, setSearchp] = useState(null);
  return (
    <Router>
      <SearchContext.Provider value={{ searchp, setSearchp }}>
        <Navbar />
      </SearchContext.Provider>
      <DefaultLayout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/:i/:slug">
            <ProductPage />
          </Route>
          <Route exact path="/:slug">
            <CategoryPage />
          </Route>
          <SearchContext.Provider value={{ searchp }}>
            <Route path="/search/results/">
              <SearchPage />
            </Route>
          </SearchContext.Provider>
        </Switch>
      </DefaultLayout>
      <Footer/>
    </Router>
  );
};

export default Routes;
