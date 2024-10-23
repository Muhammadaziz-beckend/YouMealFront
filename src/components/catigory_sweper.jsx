import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import './../static/css/swiper.css';

const CategoriesSniper = ({ category,filter,setFilter }) => {
  return (
    <>
      <Swiper
        slidesPerView={"auto"} // Динамически подстраивает количество слайдов по ширине
        spaceBetween={20}      // Расстояние между слайдами
        pagination={{
          clickable: true,     // Дает возможность пользователю кликать на пагинацию
        }}
        modules={Pagination}  // Подключаем модуль пагинации
        className="swiper"
      >
        {category?.map(item => (
          <SwiperSlide
            key={item?.id}    // Уникальный ключ для каждого элемента
            className="swiper_item"
            onClick={() => {
              console.log(item?.name);
            }}
          >
            <img src={item?.icon} alt={item?.name} />
            <span>{item?.name}</span>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CategoriesSniper;
