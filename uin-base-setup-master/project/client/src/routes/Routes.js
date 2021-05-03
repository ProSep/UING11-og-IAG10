import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Navigation from '../components/navbar/Navigation copy';
import Navigation from '../components/navbar/Navigation';
import Footer from '../components/Footer';
import DefaultLayout from '../layouts/DefaultLayout';
import Blogg from '../pages/Blogg';
import Bøker from '../pages/Bøker';
import Home from '../pages/Home';
import Manga from '../pages/Manga';
import Merch from '../pages/Merch';
import Nyheter from '../pages/Nyheter';
import Tegneserier from '../pages/Tegneserier';
import Spill from '../pages/Spill';
import Hobby from '../pages/Hobby';
import Lego from '../pages/Lego';
import Klær from '../pages/Klær';
import Brands from '../pages/Brands';

const Routes = () => (
  <Router>
    <Navigation />
    <DefaultLayout>
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/bøker">
          <Bøker />
        </Route>
        <Route exact path="/manga">
          <Manga />
        </Route>
        <Route exact path="/tegneserier">
          <Tegneserier />
        </Route>
        <Route exact path="/spill">
          <Spill />
        </Route>
        <Route exact path="/merch">
          <Merch />
        </Route>
        <Route exact path="/hobby">
          <Hobby />
        </Route>
        <Route exact path="/klær">
          <Klær />
        </Route>
        <Route exact path="/lego">
          <Lego />
        </Route>
        <Route exact path="/brands">
          <Brands />
        </Route>
        <Route exact path="/nyheter">
          <Nyheter />
        </Route>
        <Route exact path="/blogg">
          <Blogg />
        </Route>
      </Switch>
    </DefaultLayout>
    <Footer />
  </Router>
);

export default Routes;
