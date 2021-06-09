import React from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const ProductoDetaulCarousel = ({ productos }) => {
  return (
    <>
      <Swiper navigation>
        {productos &&
          productos.fotos.map((foto) => (
            <SwiperSlide key={foto.id}>
              <div
                className="img-swiper"
                style={{
                  background: `url(${foto.url}) center center/cover`,
                }}
              />
              {/* <Image src={foto.url} alt={foto.name} fluid /> */}
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default ProductoDetaulCarousel;
