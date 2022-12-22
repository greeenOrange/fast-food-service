import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import './Catagories.css'

import { Navigation, Pagination } from "swiper";
import { faPizzaSlice, faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
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
        <SwiperSlide><div className='card'>
        <div className="price-tag">
            <img src="https://i.ibb.co/VVc1Ykt/price-tag.png" alt="" />
          <div className="price-star">
          <FontAwesomeIcon icon={faStar} />
          <p>5</p>
          </div>
            </div>
          <img src="https://i.ibb.co/0n1RkzS/pizza1.png" alt="" />
          <div className="card-details">
            <h5>Pepperoni Pizza</h5>
            <p>Di napoles</p>
            <h6>$11,99</h6>
            <button>Add to cart</button>
          </div>
        </div></SwiperSlide>
        <SwiperSlide><div className='card'>
            <div className="price-tag">
            <img src="https://i.ibb.co/VVc1Ykt/price-tag.png" alt="" />
          <div className="price-star">
          <FontAwesomeIcon icon={faStarHalf} />
          <p>4.5</p>
          </div>
            </div>
          <img src="https://i.ibb.co/VMWnrQ6/pizza2.png" alt="" />
        <div className="card-details">
            <h5>Pepperoni Pizza</h5>
            <p>Di napoles</p>
            <h6>$13,99</h6>
            <button>Add to cart</button>
          </div>
        </div></SwiperSlide>
        <SwiperSlide>
          <div className='card'>
          <div className="price-tag">
            <img src="https://i.ibb.co/VVc1Ykt/price-tag.png" alt="" />
          <div className="price-star">
          <FontAwesomeIcon icon={faStarHalf} />
          <p>4.3</p>
          </div>
            </div>
            <img src="https://i.ibb.co/PYw9Z3V/pizza3.png" alt="" />
        <div className="card-details">
            <h5>Vegetarian Pizza</h5>
            <p>Cosa di Mario</p>
            <h6>$12,99</h6>
            <button>Add to cart</button>
          </div>
        </div></SwiperSlide>
        <SwiperSlide>
          <div className='card'>
          <div className="price-tag">
            <img src="https://i.ibb.co/VVc1Ykt/price-tag.png" alt="" />
          <div className="price-tag-icon">
          <div className="price-star">
          <FontAwesomeIcon icon={faStarHalf} />
          <p>4</p>
          </div>
          </div>
            </div>
            <img src="https://i.ibb.co/NT8z1PY/pizza4.png" alt="" />
        <div className="card-details">
            <h5>Mediterranean Pizza</h5>
            <p>Milano</p>
            <h6>$15,99</h6>
            <button>Add to cart</button>
          </div>
        </div></SwiperSlide>
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