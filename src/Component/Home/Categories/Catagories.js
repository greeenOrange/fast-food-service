import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import './Catagories.css'

import { Navigation, Pagination } from "swiper";
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Catagories = () => {
    return (
        <div className='catagory-section'>
            <div className="container">
                <h2>Our Popular <span>Catagories</span></h2>
                <div className="catagory-items">
                <button><FontAwesomeIcon icon={faPizzaSlice} /> Pizzas</button>
                <button><img src="https://i.ibb.co/4Thx7Qk/burgers.png" alt="" /> Burgers</button>
                <button><img src="https://i.ibb.co/2y8c63R/salad-icon.png" alt="" /> Salads</button>
                <button><img src="https://i.ibb.co/WyKCqWq/burger-combo.png" alt="" /> Combos</button>
                </div>
      <div className='swiper-card'>
      <Swiper
        slidesPerView={4}
        navigation={true}
        spaceBetween={2}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><div className='card'><img src="https://i.ibb.co/0n1RkzS/pizza1.png" alt="" /></div></SwiperSlide>
        <SwiperSlide><div className='card'><img src="https://i.ibb.co/VMWnrQ6/pizza2.png" alt="" /></div></SwiperSlide>
        <SwiperSlide><div className='card'><img src="https://i.ibb.co/PYw9Z3V/pizza3.png" alt="" /></div></SwiperSlide>
        <SwiperSlide><div className='card'><img src="https://i.ibb.co/NT8z1PY/pizza4.png" alt="" /></div></SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
      </Swiper>
      </div>
            </div>
        </div>
    );
};

export default Catagories;