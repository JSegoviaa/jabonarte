import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Jump from 'react-reveal/Jump';
import Fade from 'react-reveal/Fade';

import curso from '../../../assets/curso.jpg';
import curso2 from '../../../assets/curso-2.jpg';
import curso3 from '../../../assets/curso-3.jpg';
import curso4 from '../../../assets/curso-4.jpg';

const JabonArtesanal = () => {
  useEffect(() => {
    document.title = 'Jabonarte | Cursos de Jabones Artesanales';
  }, []);
  return (
    <div className="container text-center">
      <Jump>
        <h1 className=" sansita  mt-4">Curso de jabón artesanal</h1>
        <h5 className="mt-4">
          Este curso tiene una duración de aproximadamente 4 horas y tiene un
          costo de $1,200 MXN
        </h5>
      </Jump>

      <div className="row">
        <div className="text-justify mt-4 col-md-5">
          <Fade left>
            <h3>Temario</h3>
            <ul>
              <li>Técnica básica</li>
            </ul>
            <ul>
              <li>Técnica en capas</li>
            </ul>
            <ul>
              <li>Encapsulados</li>
            </ul>
            <ul>
              <li>Marmoleados</li>
            </ul>
            <ul>
              <li>Personalizados</li>
            </ul>
            <ul>
              <li>Terapéuticos</li>
            </ul>
            <ul>
              <li>Jabones marinos</li>
            </ul>
          </Fade>
          <Fade right>
            <h3 className="mt-4">Incluye</h3>
            <ul>
              <li>Todo el material de trabajo</li>
            </ul>
            <ul>
              <li>1kg de base de jabón</li>
            </ul>
            <ul>
              <li>3 moldes</li>
            </ul>
            <ul>
              <li>2 colorantes líquidos</li>
            </ul>
            <ul>
              <li>1 pigmento no migrante</li>
            </ul>
            <ul>
              <li>1 aroma</li>
            </ul>
            <ul>
              <li>1 alcohol quita burbuja</li>
            </ul>
          </Fade>
        </div>

        <div className="col-md-7 mt-4">
          <Fade right>
            <img src={curso} alt="curso" className="img-thumbnail" />
          </Fade>
          <Fade left>
            <img src={curso2} alt="curso" className="img-thumbnail" />
          </Fade>
        </div>
      </div>

      <div className="row">
        <div className="text-justify mt-4 col-md-5"></div>
        <div className="col-md-7">
          <Fade right>
            <img src={curso3} alt="curso" className="img-thumbnail" />
          </Fade>
          <Fade left>
            <img src={curso4} alt="curso" className="img-thumbnail" />
          </Fade>
        </div>
      </div>
      <div className="mt-4">
        <h4>
          Las alumnas se llevarán 7 jabones terminados con las diferentes
          técnicas
          <br />
          <Link to="/contacto">*Agenda tu fecha con $200 de anticipo</Link>
        </h4>
      </div>
    </div>
  );
};

export default JabonArtesanal;
