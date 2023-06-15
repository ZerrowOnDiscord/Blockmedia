import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { sp1, sp2, sp3, sp4, sp5, sp6, sp7, sp8, sp9 } from "../../assets";

// import required modules


const Carousel = () => {
    return (
        <>
          <Swiper
            slidesPerView={4}
            loop={true}
            centeredSlides={true}
            grabCursor={true}
            className="mt-10"
          >
            <SwiperSlide><img src={sp1} alt=""/></SwiperSlide>
            <SwiperSlide><img src={sp2} alt="" /></SwiperSlide>
            <SwiperSlide><img src={sp3} alt="" /></SwiperSlide>
            <SwiperSlide><img src={sp4} alt="" /></SwiperSlide>
            <SwiperSlide><img src={sp5} alt="" /></SwiperSlide>
            <SwiperSlide><img src={sp6} alt="" /></SwiperSlide>
            <SwiperSlide><img src={sp7} alt="" /></SwiperSlide>
            <SwiperSlide><img src={sp8} alt="" /></SwiperSlide>
            <SwiperSlide><img src={sp9} alt="" /></SwiperSlide>
          </Swiper>
        </>
    );
}

export default Carousel