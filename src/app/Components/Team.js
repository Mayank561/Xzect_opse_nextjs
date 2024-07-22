"use client";

import React from "react";
import styles from "../Styles/styledCss/Team.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Team = () => {
  return (
    <section className={styles.section7}>
      <article>
        <div className={styles.containerSliders}>
          <div className={styles.leftTitle}>
            <div className={styles.heading}>
              <h5>MEET OUR TEAM</h5>
              <div className={styles.mainHeading1}>
                <h1>Meet our team of experts</h1>
              </div>
              <div className={styles.para}>
                <p>
                  We welcome and celebrate different perspectives to help our
                  firm, our clients, and our people.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.teamMembers}>
            <Swiper
              slidesPerView={3}
              spaceBetween={10}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[Autoplay]}
              className={styles.swiperWrapper}
            >
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <SwiperSlide key={index} className={styles.member}>
                  <div className={styles.memberContent}>
                    <h6>FINANCE ADVISOR</h6>
                    <img
                      src={`https://capigo-demo.pbminfotech.com/html-demo/images/homepage-01/team/team-img-0${index}.jpg`}
                      alt={`Team Member ${index}`}
                    />
                    <h2>Paula Den</h2>
                    <div className={styles.icons7}>
                      <ul>
                        <li>
                          <a
                            href="#"
                            title="Facebook"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaFacebook style={{ color: "#829692" }} />
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            title="Twitter"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaTwitter style={{ color: "#829692" }} />
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            title="Instagram"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaInstagram style={{ color: "#829692" }} />
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            title="YouTube"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaYoutube style={{ color: "#829692" }} />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Team;
