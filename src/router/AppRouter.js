import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import AboutPage from '../components/AboutPage/AboutPage';
import ContactPage from '../components/ContactPage/ContactPage';
import DistPage from '../components/DistPage/DistPage';
import HomePage from '../components/HomePage/HomePage';
import AcondicionadoresPage from '../components/ProducPage/Acondicionadores/AcondicionadoresPage';
import ChampusPage from '../components/ProducPage/Champus/ChampusPage';
import JabonesPage from '../components/ProducPage/Jabones/JabonesPage';
import ProducPage from '../components/ProducPage/ProducPage';
import Footer from '../components/ui/Footer';
import Navbar from '../components/ui/Navbar';

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/productos" component={ProducPage} />
          <Route
            exact
            path="/acondicionadores"
            component={AcondicionadoresPage}
          />
          <Route exact path="/champus" component={ChampusPage} />
          <Route exact path="/jabones" component={JabonesPage} />
          <Route exact path="/sobre-nosotros" component={AboutPage} />
          <Route exact path="/contacto" component={ContactPage} />
          <Route
            exact
            path="/conviertete-en-distribuidor"
            component={DistPage}
          />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default AppRouter;
