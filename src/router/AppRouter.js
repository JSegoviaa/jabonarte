import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

//Pages
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import CursosPage from '../pages/CursosPage';
import DistPage from '../pages/DistPage';
import Categorias from '../pages/Categorias';
import Subcategorias from '../pages/Subcategorias';
import Productos from '../pages/Productos';
import Detalles from '../pages/Detalles';

//Cursos
import JabonArtesanal from '../components/Cursos/JabonArtesanal/JabonArtesanal';

//UI
import Footer from '../components/ui/Footer';
import Navbar from '../components/ui/Navbar';

const AppRouter = () => {
  return (
    <Router>
      <div className="overflow">
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/productos" component={Categorias} />
          <Route
            exact
            path="/productos/:subcategoria"
            component={Subcategorias}
          />
          <Route
            exact
            path="/productos/:subcategoria/:producto"
            component={Productos}
          />
          <Route
            exact
            path="/productos/:subcategoria/:producto/:detalles"
            component={Detalles}
          />
          <Route exact path="/sobre-nosotros" component={AboutPage} />
          <Route exact path="/contacto" component={ContactPage} />
          <Route
            exact
            path="/conviertete-en-distribuidor"
            component={DistPage}
          />
          <Route exact path="/cursos" component={CursosPage} />

          <Route exact path="/jabones-artesanales" component={JabonArtesanal} />

          <Redirect to="/" />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default AppRouter;
