import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

//Pages
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import CursosPage from '../pages/CursosPage';
import DistPage from '../pages/DistPage';
import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';

//Productos cuidado del cabello
import CuidadoCabello from '../components/Products/CuidadoCabello';
import AcondicionadoresPage from '../components/Products/CuidadoCabello/AcondicionadoresPage';
import ChampusPage from '../components/Products/CuidadoCabello/ChampusPage';

//Productos cuidado de la piel
import CuidadoPiel from '../components/Products/CuidadoPiel';
import Arcillas from '../components/Products/CuidadosPiel/Arcillas';
import BalsamoLabial from '../components/Products/CuidadosPiel/BalsamoLabial';
import Exfoliantes from '../components/Products/CuidadosPiel/Exfoliantes';
import JabonesPage from '../components/Products/CuidadosPiel/JabonesPage';

//Productos insumos
import Insumos from '../components/Products/Insumos';
import AceiteEsencial from '../components/Products/Insumos/AceiteEsencial';
import BaseGlicerina from '../components/Products/Insumos/BaseGlicerina';
import ColorantesHidro from '../components/Products/Insumos/ColorantesHidro';
import Fragancias from '../components/Products/Insumos/Fragancias';
import Glitter from '../components/Products/Insumos/Glitter';
import CarbonActivado from '../components/Products/Insumos/CarbonActivado';
import MicasPerladas from '../components/Products/Insumos/MicasPerladas';
import MoldePoli from '../components/Products/Insumos/MoldePoli';
import PigmentoMigrante from '../components/Products/Insumos/PigmentoMigrante';

//Productos recuerdos
import Recuerdos from '../components/Products/Recuerdos';
import BabyShower from '../components/Products/Recuerdos/BabyShower';
import Bautizo from '../components/Products/Recuerdos/Bautizo';
import Boda from '../components/Products/Recuerdos/Boda';
import DiasMadres from '../components/Products/Recuerdos/DiasMadres';
import FiestasInfantiles from '../components/Products/Recuerdos/FiestasInfantiles';
import PrimeraComunion from '../components/Products/Recuerdos/PrimeraComunion';
import RecuerdosNavidenos from '../components/Products/Recuerdos/RecuerdosNavidenos';
import XVAnos from '../components/Products/Recuerdos/XVAnos';

//Cursos
import JabonArtesanal from '../components/Cursos/JabonArtesanal/JabonArtesanal';

//UI
import Footer from '../components/ui/Footer';
import Navbar from '../components/ui/Navbar';

import ProductInfo from '../components/Products/ProductInfo';
import MoldesSilicon from '../components/Products/Insumos/MoldesSilicon';

const AppRouter = () => {
  return (
    <Router>
      <div className="overflow">
        <Navbar />
        <Switch>
          {/* Pages */}
          <Route exact path="/" component={HomePage} />
          <Route exact path="/productos" component={ProductPage} />
          <Route exact path="/sobre-nosotros" component={AboutPage} />
          <Route exact path="/contacto" component={ContactPage} />
          <Route
            exact
            path="/conviertete-en-distribuidor"
            component={DistPage}
          />
          <Route exact path="/cursos" component={CursosPage} />

          {/* Productos cuidado del cabello */}
          <Route exact path="/cuidado-del-cabello" component={CuidadoCabello} />
          <Route exact path="/champus" component={ChampusPage} />
          <Route
            exact
            path="/acondicionadores"
            component={AcondicionadoresPage}
          />
          {/* Productos cuidado de la piel */}
          <Route exact path="/cuidados-de-la-piel" component={CuidadoPiel} />
          <Route exact path="/jabones" component={JabonesPage} />
          <Route exact path="/arcillas" component={Arcillas} />
          <Route exact path="/exfoliante" component={Exfoliantes} />
          <Route exact path="/balsamo-labial" component={BalsamoLabial} />

          {/* Recuerdos */}
          <Route exact path="/recuerdos-para-eventos" component={Recuerdos} />
          <Route exact path="/bautizo" component={Bautizo} />
          <Route exact path="/baby-shower" component={BabyShower} />
          <Route exact path="/boda" component={Boda} />
          <Route exact path="/jabones-artesanales" component={JabonArtesanal} />
          <Route exact path="/dias-de-las-madres" component={DiasMadres} />
          <Route
            exact
            path="/fiestas-infantiles"
            component={FiestasInfantiles}
          />
          <Route exact path="/primera-comunion" component={PrimeraComunion} />
          <Route exact path="/xv-años" component={XVAnos} />
          <Route
            exact
            path="/recuerdos-navidenos"
            component={RecuerdosNavidenos}
          />

          {/* Insumos */}
          <Route exact path="/insumos" component={Insumos} />
          <Route exact path="/aceite-esencial" component={AceiteEsencial} />
          <Route exact path="/base-glicerina" component={BaseGlicerina} />
          <Route exact path="/carbon-activado" component={CarbonActivado} />
          <Route exact path="/fragancias" component={Fragancias} />
          <Route
            exact
            path="/pigmentos-migrantes"
            component={PigmentoMigrante}
          />
          <Route exact path="/glitter" component={Glitter} />
          <Route exact path="/micas-perladas" component={MicasPerladas} />
          <Route exact path="/molde-polietileno" component={MoldePoli} />
          <Route exact path="/molde-de-silicon" component={MoldesSilicon} />
          <Route
            exact
            path="/colorante-hidrosoluble"
            component={ColorantesHidro}
          />

          <Route exact path="/:productoId" component={ProductInfo} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default AppRouter;
