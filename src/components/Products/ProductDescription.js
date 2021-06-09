import React, { useState } from 'react';
import { Alert, ListGroup } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';

const ProductDescription = ({ productos }) => {
  const [precio1, setPrecio1] = useState(true);
  const [precio2, setPrecio2] = useState(false);
  const [precio3, setPrecio3] = useState(false);

  const handlePrice1 = () => {
    setPrecio1(true);
    setPrecio2(false);
    setPrecio3(false);
  };

  const handlePrice2 = () => {
    setPrecio1(false);
    setPrecio2(true);
    setPrecio3(false);
  };

  const handlePrice3 = () => {
    setPrecio1(false);
    setPrecio2(false);
    setPrecio3(true);
  };

  return (
    <ListGroup variant="flush">
      <ListGroup.Item>
        <h3 className="sansita text-center">{productos.titulo}</h3>
      </ListGroup.Item>

      {productos.contenido && (
        <ListGroup.Item>
          <ReactMarkdown children={productos.contenido} />
        </ListGroup.Item>
      )}

      <ListGroup.Item>
        <div>
          {productos.descuento ? (
            <Alert variant="info" className="text-center">
              Este producto tiene un {productos.descuento}% de descuento
              {precio1 && (
                <div>
                  Estás ahorrando $
                  {(productos.precio * productos.descuento) / 100}
                  MXN
                </div>
              )}
              {precio2 && (
                <div>
                  Estás ahorrando $
                  {(productos.precio2 * productos.descuento) / 100}
                  MXN
                </div>
              )}
              {precio3 && (
                <div>
                  Estás ahorrando $
                  {(productos.precio3 * productos.descuento) / 100}
                  MXN
                </div>
              )}
            </Alert>
          ) : (
            <></>
          )}

          {productos.descuento ? (
            <>
              {precio1 && (
                <h5>
                  <del> Precio: ${productos.precio} MXN </del>
                </h5>
              )}
              {precio2 && (
                <h5>
                  <del> Precio: ${productos.precio2} MXN </del>
                </h5>
              )}
              {precio3 && (
                <h5>
                  <del> Precio: ${productos.precio3} MXN</del>
                </h5>
              )}
            </>
          ) : (
            <>
              {precio1 && <h5> Precio: ${productos.precio} MXN </h5>}
              {precio2 && <h5> Precio: ${productos.precio2} MXN </h5>}
              {precio3 && <h5> Precio: ${productos.precio3} MXN </h5>}
            </>
          )}

          {productos.descuento ? (
            <div>
              {precio1 && (
                <h5>
                  Precio: $
                  {productos.precio -
                    (productos.precio * productos.descuento) / 100}
                  MXN
                </h5>
              )}
              {precio2 && (
                <h5>
                  Precio: $
                  {productos.precio2 -
                    (productos.precio2 * productos.descuento) / 100}
                  MXN
                </h5>
              )}
              {precio3 && (
                <h5>
                  Precio: $
                  {productos.precio3 -
                    (productos.precio3 * productos.descuento) / 100}
                  MXN
                </h5>
              )}
            </div>
          ) : (
            <></>
          )}
        </div>
      </ListGroup.Item>

      {/* Muestra los gramos  */}

      {productos.gramos && (
        <ListGroup.Item>
          <div className="text-center text-md-left">
            <p>Tamaño</p>
            <span
              className="mx-2 pointer btn-primary py-1 px-2 rounded"
              onClick={handlePrice1}
            >
              {productos.gramos && ` ${productos.gramos}gm`}
            </span>
            {productos.gramos2 && (
              <span
                className="mx-2 pointer btn-primary py-1 px-2 rounded"
                onClick={handlePrice2}
              >
                {productos.gramos2 && ` ${productos.gramos2}gm`}
              </span>
            )}
            {productos.gramos3 && (
              <span
                className="mx-2 pointer btn-primary py-1 px-2 rounded"
                onClick={handlePrice3}
              >
                {productos.gramos3 && ` ${productos.gramos3}gm`}
              </span>
            )}
          </div>
        </ListGroup.Item>
      )}

      {/* Muestra diámetro */}

      {productos.diametro && (
        <ListGroup.Item>
          <p className="text-center">Diámetro: {productos.diametro}cm</p>
        </ListGroup.Item>
      )}

      {/* Muetras mililitros */}

      {productos.ml && (
        <ListGroup.Item>
          <p className="text-center">Mililitros: {productos.ml}ml</p>
        </ListGroup.Item>
      )}

      {/* Muestra medidas  */}

      {productos.ancho && productos.largo && productos.alto ? (
        <ListGroup.Item>
          <p className="text-center">
            Medidas: {productos.ancho}cm x {productos.largo}cm x{' '}
            {productos.alto}cm
          </p>
        </ListGroup.Item>
      ) : productos.ancho && productos.largo ? (
        <ListGroup.Item>
          <p className="text-center">
            Medidas: {productos.ancho}cm x {productos.largo}cm
          </p>
        </ListGroup.Item>
      ) : productos.ancho ? (
        <ListGroup.Item>
          <p className="text-center">Medidas: {productos.ancho}cm</p>
        </ListGroup.Item>
      ) : (
        <></>
      )}
    </ListGroup>
  );
};

export default ProductDescription;
