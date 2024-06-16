import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./WhatNew.css";
// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const WhatNew = () => {
  return (
    <div>
      <SectionTitle heading={"What's New"}></SectionTitle>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="card  glass">
            <figure>
              <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Life hack</h2>
              <p>How to park your car at your garage?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-accent">Add to Cart</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card  glass">
            <figure>
              <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Life hack</h2>
              <p>How to park your car --at your garage?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-accent">Add to Cart</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card  glass">
            <figure>
              <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Life hack</h2>
              <p>How to park your car at your garage?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-accent">Add to Cart</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card  glass">
            <figure>
              <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Life hack</h2>
              <p>How to park your car at your garage?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-accent">Add to Cart</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card  glass">
            <figure>
              <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Life hack</h2>
              <p>How to park your car at your garage?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-accent">Add to Cart</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card  glass">
            <figure>
              <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Life hack</h2>
              <p>How to park your car at your garage?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-accent">Add to Cart</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card  glass">
            <figure>
              <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Life hack</h2>
              <p>How to park your car at your garage?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-accent">Add to Cart</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card  glass">
            <figure>
              <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Life hack</h2>
              <p>How to park your car at your garage?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-accent">Add to Cart</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card  glass">
            <figure>
              <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Life hack</h2>
              <p>How to park your car at your garage?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-accent">Add to Cart</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default WhatNew;
