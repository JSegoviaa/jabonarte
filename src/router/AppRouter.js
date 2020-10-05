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
import Arcillas from '../components/ProducPage/Arcillas/Arcillas';
import BabyShower from '../components/ProducPage/BabyShower/BabyShower';
import Bautizo from '../components/ProducPage/Bautizo/Bautizo';
import Boda from '../components/ProducPage/Boda/Boda';
import CursosPage from '../components/CursosPage/CursosPage';
import DiasMadres from '../components/ProducPage/DiasMadres/DiasMadres';
import ChampusPage from '../components/ProducPage/Champus/ChampusPage';
import CuidadoCabello from '../components/ProducPage/CuidadoCabello';
import CuidadoPiel from '../components/ProducPage/CuidadoPiel';
import FiestasInfantiles from '../components/ProducPage/FiestasInfantiles/FiestasInfantiles';
import JabonesPage from '../components/ProducPage/Jabones/JabonesPage';
import PrimeraComunion from '../components/ProducPage/PrimeraComunion/PrimeraComunion';
import ProducPage from '../components/ProducPage/ProducPage';
import ProductInfo from '../components/ProducPage/ProductInfo';
import Recuerdos from '../components/ProducPage/Recuerdos';
import RecuerdosNavidenos from '../components/ProducPage/RecuerdosNavidenos/RecuerdosNavidenos';
import XVAnos from '../components/ProducPage/XVAnos/XVAnos';
import Footer from '../components/ui/Footer';
import Navbar from '../components/ui/Navbar';
import BalsamoLabial from '../components/ProducPage/BalsamoLabial/BalsamoLabial';
import Exofiliantes from '../components/ProducPage/Exofiliantes/Exofiliantes';
import JabonArtesanal from '../components/CursosPage/JabonArtesanal/JabonArtesanal';
import Insumos from '../components/ProducPage/Insumos/Insumos';
import AceiteEsencial from '../components/ProducPage/Insumos/AceiteEsencial/AceiteEsencial';
import BaseGlicerina from '../components/ProducPage/Insumos/BaseGlicerina/BaseGlicerina';
import ColorantesHidro from '../components/ProducPage/Insumos/ColorantesHidrosolubes/ColorantesHidro';
import Fragancias from '../components/ProducPage/Insumos/Fragancias/Fragancias';
import Glitter from '../components/ProducPage/Insumos/Glitter/Glitter';
import MicasPerladas from '../components/ProducPage/Insumos/MicasPerladas/MicasPerladas';
import MoldePoli from '../components/ProducPage/Insumos/MoldePolitileno/MoldePoli';
import PigmentoMigrante from '../components/ProducPage/Insumos/PigmentosMigrantes/PigmentoMigrante';

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
          <Route exact path="/arcillas" component={Arcillas} />
          <Route exact path="/cuidados-de-la-piel" component={CuidadoPiel} />
          <Route exact path="/cuidado-del-cabello" component={CuidadoCabello} />
          <Route exact path="/recuerdos-para-eventos" component={Recuerdos} />
          <Route exact path="/bautizo" component={Bautizo} />
          <Route exact path="/baby-shower" component={BabyShower} />
          <Route exact path="/boda" component={Boda} />
          <Route exact path="/balsamo-labial" component={BalsamoLabial} />
          <Route exact path="/exfoliante" component={Exofiliantes} />
          <Route exact path="/cursos" component={CursosPage} />
          <Route exact path="/jabones-artesanales" component={JabonArtesanal} />
          <Route exact path="/insumos" component={Insumos} />
          <Route exact path="/aceite-esencial" component={AceiteEsencial} />
          <Route exact path="/base-glicerina" component={BaseGlicerina} />
          <Route exact path="/fragancias" component={Fragancias} />
          <Route
            exact
            path="/pigmentos-migrantes"
            component={PigmentoMigrante}
          />
          <Route exact path="/glitter" component={Glitter} />
          <Route exact path="/micas-perladas" component={MicasPerladas} />
          <Route exact path="/molde-polietileno" component={MoldePoli} />
          <Route
            exact
            path="/colorante-hidrosoluble"
            component={ColorantesHidro}
          />
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
          <Route exact path="/sobre-nosotros" component={AboutPage} />
          <Route exact path="/contacto" component={ContactPage} />
          <Route
            exact
            path="/conviertete-en-distribuidor"
            component={DistPage}
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
