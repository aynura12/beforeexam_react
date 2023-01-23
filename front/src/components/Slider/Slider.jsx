import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "../Slider/slider.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Slider = () => {
  return (
    <div>
      <Swiper
       
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide className="slider_first">
          <div className="slider_text">
            <h1>CREATIVE MODERN</h1>
            
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              sit ea natus blanditiiuptate accusamus iure unde asperiores quasi.
            </p>
            
            <div>
              <button className="slider_button button1">GET STARTED</button>
              <button className=" button2">DOWNLOAD</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider_second">
          <div className="slider_text">
            <h1>MODERN DESIGN</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              sit ea natus blanditiiuptate accusamus iure unde asperiores quasi.
            </p>
            <div>
              <button className="slider_button button1">GET STARTED</button>
              <button className=" button2">DOWNLOAD</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
