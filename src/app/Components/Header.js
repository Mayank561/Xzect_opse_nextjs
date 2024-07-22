"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { MdArrowOutward } from "react-icons/md";

import "../Styles/Header.css";

const Header = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: false,
      }}
      navigation={false}
      modules={[Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div
          className="swiper-slide"
          style={{
            backgroundImage:
              "url('https://capigo-demo.pbminfotech.com/html-demo/images/banner-slider-img/slider01-slide-1.jpg')",
            width: "100%",
            height: "100vh",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="carousel-caption">
            <h3>IMPROVE YOUR FUTURE</h3>
            <h2>
              <strong>Acknowledge</strong>
              <br />
              the Unexpected.
            </h2>
            <div className="para-1">
              Devise and implement business strategies
              <br />
              for an entire business or division.
            </div>
            <div className="btn-1" data-aos="fade-up">
              <button>
                Contact us
                <span style={{ fontSize: "0.9rem" }}>
                  <MdArrowOutward />
                </span>
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="swiper-slide"
          style={{
            backgroundImage:
              "url('https://capigo-demo.pbminfotech.com/html-demo/images/banner-slider-img/slider01-slide-2.jpg')",
            width: "100%",
            height: "100vh",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="carousel-caption">
            <h3>PLAN FOR SECURE ASPIRATIONS</h3>
            <h2>
              <strong>Empowering</strong>
              <br />
              Your Potential.
            </h2>
            <div className="para-1">
              Devise and implement business strategies
              <br />
              for an entire business or division.
            </div>
            <div className="btn-1" data-aos="fade-up">
              <button>
                Contact us
                <span style={{ fontSize: "0.9rem" }}>
                  <MdArrowOutward />
                </span>
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Header;
