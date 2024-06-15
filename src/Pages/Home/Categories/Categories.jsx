import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Categories = () => {
  return (
    <div>
      <SectionTitle heading={"Category"}></SectionTitle>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          430: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <a href="#">
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#">
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#">
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#">
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#">
            <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#">
            <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#">
            <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#">
            <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#">
            <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Categories;
