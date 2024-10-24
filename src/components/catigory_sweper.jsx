import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import './../static/css/swiper.css';

const CategoriesSniper = ({ category = [], filter, setFilter }) => {
  const [activeCategory, setActiveCategory] = useState(null); // Добавляем состояние для активного элемента

  const handleCategoryClick = (item) => {
    const obj = {
      category: [item?.id]
    };
    setFilter({ ...filter, ...obj });
    setActiveCategory(item?.id); // Обновляем активный элемент
  };

  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={Pagination}
        className="swiper"
      >
        {Array.isArray(category) && category.length > 0 ? (
          category.map(item => (
            <SwiperSlide
              key={item?.id}
              className={`swiper_item ${activeCategory === item?.id ? "active" : ""}`} // Добавляем класс "active" если элемент активный
              onClick={() => handleCategoryClick(item)} // Обработчик нажатия
            >
              <img src={item?.icon} alt={item?.name || "Category"} />
              <span>{item?.name}</span>
            </SwiperSlide>
          ))
        ) : (
          <p>No categories available</p>
        )}
      </Swiper>
    </>
  );
};

export default CategoriesSniper;
