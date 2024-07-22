"use client";

import React from "react";
import "../Styles/Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { FaStar } from "react-icons/fa";
const Section9 = () => {
  const testimonials = [
    {
      img: "https://capigo-demo.pbminfotech.com/html-demo/images/homepage-01/testimonial/testimonial-01.jpg",
      name: "Stephen Welch",
      title: "SATISFIED CLIENT",
      review:
        "I express my deep gratitude to the team for the impeccable and productive service to the company activities based on the results of seven years of joint work I recommend the services.",
    },
    {
      img: "https://capigo-demo.pbminfotech.com/html-demo/images/homepage-01/testimonial/testimonial-02.jpg",
      name: "Jane Doe",
      title: "HAPPY CUSTOMER",
      review:
        "I express my deep gratitude to the team for the impeccable and productive service to the company activities based on the results of seven years of joint work I recommend the services.",
    },
    {
      img: "https://capigo-demo.pbminfotech.com/html-demo/images/homepage-01/testimonial/testimonial-03.jpg",
      name: "John Smith",
      title: "LOYAL CLIENT",
      review:
        "I express my deep gratitude to the team for the impeccable and productive service to the company activities based on the results of seven years of joint work I recommend the services.",
    },
    {
      img: "https://capigo-demo.pbminfotech.com/html-demo/images/homepage-01/testimonial/testimonial-04.jpg",
      name: "Emily Johnson",
      title: "SATISFIED CLIENT",
      review:
        "I express my deep gratitude to the team for the impeccable and productive service to the company activities based on the results of seven years of joint work I recommend the services.",
    },
    {
      img: "https://capigo-demo.pbminfotech.com/html-demo/images/homepage-01/testimonial/testimonial-05.jpg",
      name: "Michael Brown",
      title: "GRATEFUL CLIENT",
      review:
        "I express my deep gratitude to the team for the impeccable and productive service to the company activities based on the results of seven years of joint work I recommend the services.",
    },
    {
      img: "https://capigo-demo.pbminfotech.com/html-demo/images/homepage-01/testimonial/testimonial-06.jpg",
      name: "Sarah Wilson",
      title: "HAPPY CUSTOMER",
      review:
        "I express my deep gratitude to the team for the impeccable and productive service to the company activities based on the results of seven years of joint work I recommend the services.",
    },
  ];

  return (
    <section className="section-9">
      <article className="article-9">
        <div className="testimonial-title" id="testimonial-title">
          <h6>TESTIMONIAL</h6>
          <h1>Our customer reviews</h1>
        </div>
        <Swiper
          pagination={{ clickable: false }}
          loop
          spaceBetween={10}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          breakpoints={{
            600: {
              slidesPerView: 2,
            },
            1000: {
              slidesPerView: 3,
            },
          }}
          className="mySwiper2"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide className="carousel-item" key={index}>
              <div className="testimonial-card">
                <div className="inner-card">
                  <img src={testimonial.img} alt={`Client ${index + 1}`} />
                  <div className="text">
                    <h2>{testimonial.name}</h2>
                    <h6>{testimonial.title}</h6>
                  </div>
                  <div className="ratings">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="star-icon" />
                    ))}
                  </div>
                </div>
                <p className="para-5">{testimonial.review}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </article>
    </section>
  );
};

export default Section9;
