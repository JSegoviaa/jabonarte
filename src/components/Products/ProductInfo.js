import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Rotate from 'react-reveal/Rotate';
import { Redirect, useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper-bundle.css';

import { getProductsById } from '../../selectors/getProductById';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const ProductInfo = ({ history }) => {
  useEffect(() => {
    document.title = `Jabonarte | ${title}`;
  });

  const { productoId } = useParams();

  const producto = getProductsById(productoId);

  if (!producto) {
    return <Redirect to="/productos" />;
  }

  const handleReturn = () => {
    if (history.length <= 2) {
      history.push('/');
    } else {
      history.goBack();
    }
  };
  const {
    id2,
    id3,
    id4,
    id5,
    id6,
    id7,
    id8,
    id9,
    id10,
    title,
    description,
    price1,
    grams1,
    price2,
    grams2,
    price3,
    grams3,
    price4,
    grams4,
    price5,
    grams5,
    price6,
    grams6,
    price7,
    grams7,
  } = producto;

  return (
    <React.Fragment>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-7">
            <div className="text-center">
              <Swiper
                spaceBetween={50}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>
                  <img
                    className="swiper"
                    src={`../../../assets/${productoId}.jpg`}
                    alt="a"
                  />
                </SwiperSlide>
                {id2 && (
                  <SwiperSlide>
                    <img
                      className="swiper"
                      src={`../../../assets/${id2}.jpg`}
                      alt="a"
                    />
                  </SwiperSlide>
                )}
                {id3 && (
                  <SwiperSlide>
                    <img
                      className="swiper"
                      src={`../../../assets/${id3}.jpg`}
                      alt="a"
                    />
                  </SwiperSlide>
                )}
                {id4 && (
                  <SwiperSlide>
                    <img
                      className="swiper"
                      src={`../../../assets/${id4}.jpg`}
                      alt="a"
                    />
                  </SwiperSlide>
                )}
                {id5 && (
                  <SwiperSlide>
                    <img
                      className="swiper"
                      src={`../../../assets/${id5}.jpg`}
                      alt="a"
                    />
                  </SwiperSlide>
                )}
                {id6 && (
                  <SwiperSlide>
                    <img
                      className="swiper"
                      src={`../../../assets/${id6}.jpg`}
                      alt="a"
                    />
                  </SwiperSlide>
                )}
                {id7 && (
                  <SwiperSlide>
                    <img
                      className="swiper"
                      src={`../../../assets/${id7}.jpg`}
                      alt="a"
                    />
                  </SwiperSlide>
                )}
                {id8 && (
                  <SwiperSlide>
                    <img
                      className="swiper"
                      src={`../../../assets/${id8}.jpg`}
                      alt="a"
                    />
                  </SwiperSlide>
                )}
                {id9 && (
                  <SwiperSlide>
                    <img
                      className="swiper"
                      src={`../../../assets/${id9}.jpg`}
                      alt="a"
                    />
                  </SwiperSlide>
                )}
                {id10 && (
                  <SwiperSlide>
                    <img
                      className="swiper"
                      src={`../../../assets/${id10}.jpg`}
                      alt="a"
                    />
                  </SwiperSlide>
                )}
              </Swiper>
            </div>
          </div>

          <Rotate top right>
            <div className="col-md-5">
              <h3 className="sansita">{title}</h3>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">{description}</li>

                <li className="list-group-item">
                  {grams1} - {price1}
                </li>
                {price2 && (
                  <li className="list-group-item">
                    {grams2} - {price2}
                  </li>
                )}
                {price3 && (
                  <li className="list-group-item">
                    {grams3} - {price3}
                  </li>
                )}
                {price4 && (
                  <li className="list-group-item">
                    {grams4} - {price4}
                  </li>
                )}
                {price5 && (
                  <li className="list-group-item">
                    {grams5} - {price5}
                  </li>
                )}
                {price6 && (
                  <li className="list-group-item">
                    {grams6} - {price6}
                  </li>
                )}
                {price7 && (
                  <li className="list-group-item">
                    {grams7} - {price7}
                  </li>
                )}
              </ul>

              <Button variant="primary" onClick={handleReturn} className="btn ">
                Regresar a la página anterior
              </Button>
            </div>
          </Rotate>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductInfo;
