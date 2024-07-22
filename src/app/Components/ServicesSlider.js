"use client";
import React, { useState, useEffect } from "react";
import "../Styles/ServicesSlider.css";

const Section5 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "Purchasing & Combining *",
    "Capital Obtaining *",
    "Market Research *",
    "Growth Strategy *",
    "Purchasing & Combining *",
    "Capital Obtaining *",
    "Market Research *",
    "Growth Strategy *",
    "Purchasing & Combining *",
  ];
  const totalSlides = slides.length;
  const slideInterval = 5000;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === totalSlides - 1 ? 0 : prevSlide + 1
      );
    }, slideInterval);

    return () => clearInterval(interval);
  }, [totalSlides, slideInterval]);

  return (
    <section className="section-5">
      <div className="slider-container">
        <div
          className="slider-wrapper"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div className="slider-slide" key={index}>
              <h2>{slide}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section5;
