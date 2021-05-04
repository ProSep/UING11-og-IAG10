import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DefaultLayout from '../layouts/DefaultLayout';
import Home from '../pages/Home';
import ProductPage from '../pages/ProductPage';
import CategoryPage from '../pages/CategoryPage';
import Navbar from '../components/content/Navigasjon/Navbar';

/**
 * Her har jeg laget en "rute" til "/" og bruker Home komponenten i pages mappen
 */

const Routes = () => (
  <Router>
    <Navbar/>
    <DefaultLayout>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/:katslug/:slug">
          <ProductPage />
        </Route>
        <Route exact path="/:slug">
         <CategoryPage />
        </Route>
      </Switch>
    </DefaultLayout>
  </Router>
);

export default Routes;
