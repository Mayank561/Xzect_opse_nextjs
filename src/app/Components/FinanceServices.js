"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";

import { Autoplay } from "swiper/modules";

import styles from "../Styles/styledCss/FinanceServices.module.css";

export default function FinanceServices() {
  return (
    <section className={styles.section3}>
      <article>
        <div className={styles.container7}>
          <div className={styles.wrapSlider}>
            <div className={styles.mainHeading}>
              <h5>OUR SERVICES</h5>
              <h1 data-aos="fade-left">
                We offer a great number of <br />
                finance services
              </h1>
            </div>
            <Swiper
              spaceBetween={30}
              pagination={{
                clickable: false,
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              breakpoints={{
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                800: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                500: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                0: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
              }}
              className={styles.mySwiper}
            >
              <SwiperSlide>
                <div className={styles.swiperSlide}>
                  <img
                    className={styles.img0}
                    src="https://capigo-demo.pbminfotech.com/html-demo/images/homepage-01/service/service-01.jpg"
                    alt=""
                    style={{ maxWidth: "80%" }}
                    data-aos="fade-up"
                  />
                  <div className={styles.text}>
                    <a href="#" className={styles.mHead}>
                      MANAGEMENT
                    </a>
                    <a href="#">Financial Management</a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.swiperSlide}>
                  <img
                    className={styles.img0}
                    src="https://capigo-demo.pbminfotech.com/html-demo/images/homepage-01/service/service-02.jpg"
                    alt=""
                    style={{ maxWidth: "80%" }}
                    data-aos="fade-up"
                  />
                  <div className={styles.text}>
                    <a href="#" className={styles.mHead}>
                      MANAGEMENT
                    </a>
                    <a href="#">Financial Management</a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.swiperSlide}>
                  <img
                    className={styles.img0}
                    src="https://capigo-demo.pbminfotech.com/html-demo/images/homepage-01/service/service-03.jpg"
                    alt=""
                    style={{ maxWidth: "80%" }}
                    data-aos="fade-up"
                  />
                  <div className={styles.text}>
                    <a href="#" className={styles.mHead}>
                      MANAGEMENT
                    </a>
                    <a href="#">Financial Management</a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.swiperSlide}>
                  <img
                    className={styles.img0}
                    src="https://capigo-demo.pbminfotech.com/html-demo/images/homepage-01/service/service-04.jpg"
                    alt=""
                    style={{ maxWidth: "80%" }}
                    data-aos="fade-up"
                  />
                  <div className={styles.text}>
                    <a href="#" className={styles.mHead}>
                      MANAGEMENT
                    </a>
                    <a href="#">Financial Management</a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.swiperSlide}>
                  <img
                    className={styles.img0}
                    src="https://capigo-demo.pbminfotech.com/html-demo/images/homepage-01/service/service-05.jpg"
                    alt=""
                    style={{ maxWidth: "80%" }}
                    data-aos="fade-up"
                  />
                  <div className={styles.text}>
                    <a href="#" className={styles.mHead}>
                      MANAGEMENT
                    </a>
                    <a href="#">Financial Management</a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.swiperSlide}>
                  <img
                    className={styles.img0}
                    src="https://capigo-demo.pbminfotech.com/html-demo/images/homepage-01/service/service-06.jpg"
                    alt=""
                    style={{ maxWidth: "80%" }}
                    data-aos="fade-up"
                  />
                  <div className={styles.text}>
                    <a href="#" className={styles.mHead}>
                      MANAGEMENT
                    </a>
                    <a href="#">Financial Management</a>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </article>
    </section>
  );
}
