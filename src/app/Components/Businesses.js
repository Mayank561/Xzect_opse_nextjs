"use client";
import React, { useEffect } from "react";
import "../Styles/Businesses.css";

const Businesses = () => {
  useEffect(() => {
    const animateCounters = () => {
      const counts = document.querySelectorAll(".count-1");
      const count2 = document.querySelectorAll(".count-2");
      const count3 = document.querySelectorAll(".count-3");

      function counter1Animation() {
        counts.forEach((count) => {
          let i = 0;
          const interval = setInterval(() => {
            if (i > 300) {
              clearInterval(interval);
            } else {
              count.innerHTML = `${i}+`;
              i++;
            }
          }, 10);
        });
      }

      function counter2Animation() {
        count2.forEach((count) => {
          let i = 0;
          const interval = setInterval(() => {
            if (i > 575) {
              clearInterval(interval);
            } else {
              count.innerHTML = `${i}+`;
              i++;
            }
          }, 10);
        });
      }

      function counter3Animation() {
        count3.forEach((count) => {
          let i = 0;
          const interval = setInterval(() => {
            if (i > 245) {
              clearInterval(interval);
            } else {
              count.innerHTML = `${i}+`;
              i++;
            }
          }, 10);
        });
      }

      counter1Animation();
      counter2Animation();
      counter3Animation();
    };

    animateCounters();
  }, []);

  return (
    <section className="section-2">
      <article>
        <div className="main-container-2">
          <div className="first-wrap">
            <div className="container-left">
              <h5>HAPPY CLIENTS</h5>
              <h1 className="count-1">0+</h1>
            </div>
            <div className="container-left2">
              <div className="und">
                <h5>TOTAL EMPLOYEES</h5>
                <h1 className="count-2">0+</h1>
              </div>
            </div>
            <div className="container-left3">
              <div className="und">
                <h5>USEFUL PROGRAMS</h5>
                <h1 className="count-3">0+</h1>
              </div>
            </div>
          </div>
          <div className="second-wrap">
            <img
              className="img-cl"
              src="https://capigo-demo.pbminfotech.com/html-demo/images/homepage-01/img-01.jpg"
              alt="Image"
              // style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="right-content">
            <div className="wrap-right">
              <h5>WHO WE ARE</h5>
              <h1>Small businesses is Doob area of expertise.</h1>
              <div className="wrap-text">
                <span>
                  <input
                    type="checkbox"
                    style={{ height: "2rem", width: "2rem" }}
                    className="inpt"
                  />
                  <h4>A good traveler has no fixed plan</h4>
                </span>
                <p>
                  Ded do eiusmod tempor incididunt ut labore et dolore aliqua.
                  Ut enim ad minim veniam, quis nostrud.
                </p>
              </div>
              <div className="wrap-text">
                <span>
                  <input
                    type="checkbox"
                    style={{ height: "2rem", width: "2rem" }}
                  />
                  <h4>Track your teams progress with mobile</h4>
                </span>
                <p>
                  Ded do eiusmod tempor incididunt ut labore et dolore aliqua.
                  Ut enim ad minim veniam, quis nostrud.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Businesses;
