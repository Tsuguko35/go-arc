import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../styles/roofCarousel.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import { useLocation } from "react-router-dom";

function RoofCarousel({ roofItems }) {
  const location = useLocation();
  return (
    <div id="roofCarousel" className="roofCarousel feature4">
      {location.pathname
        .toLowerCase()
        .includes("Residential".toLowerCase()) && (
        <p className="title">Residential Roofing Projects Gallery</p>
      )}
      {location.pathname.toLowerCase().includes("Commercial".toLowerCase()) && (
        <p className="title">Commercial Roofing Projects Gallery</p>
      )}

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 500,
          modifier: 1,
          slideShadows: true,
        }}
        breakpoints={{}}
        modules={[EffectCoverflow, Pagination]}
        pagination={{ clickable: true }}
        className="swiper-container"
      >
        {roofItems &&
          roofItems.map((roof) => (
            <SwiperSlide>
              <img src={roof} className="swiper-img" alt="Slide 1" />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default RoofCarousel;
