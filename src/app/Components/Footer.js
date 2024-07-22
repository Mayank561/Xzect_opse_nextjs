import React from "react";
import { FaFacebookSquare, FaTwitter, FaInstagram } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

import "../Styles/Footer.css";

const Footer = () => {
  return (
    <section className="footer-section">
      <footer>
        <div className="container-11s">
          <div className="footer-icon">
            <img
              src="https://capigo-demo.pbminfotech.com/html-demo/images/white-logo.svg"
              alt="Logo"
            />
          </div>
          <div className="footer-text">
            <div className="footer-title">
              <h2>
                Subscribe to our newsletter! Stay <br />
                always in touch!
              </h2>
              <form>
                <input type="email" placeholder="Enter your email" />
                <button
                  type="submit"
                  className="right-icon"
                  style={{ background: "transparent", border: "none" }}
                >
                  <GoArrowUpRight size={24} style={{ color: "white" }} />
                </button>
              </form>
            </div>
            <div className="next-col">
              <div className="inner-wrap">
                <h4>Our Address</h4>
                <address className="add-1">
                  Valentin, Street Road 24, New <br />
                  York, USA-67452
                </address>
              </div>
              <div className="contact-us">
                <h4>Contact Us</h4>
                <p className="email">noreply@pbminfotech.com</p>
                <p>+(02) 574-328-301</p>
              </div>
              <div className="icons">
                <h4>Our Social</h4>
                <div className="social-link">
                  <div className="links-1">
                    <a href="https://facebook.com" aria-label="Facebook">
                      <FaFacebookSquare size={16} color="#ffffff" />
                    </a>
                  </div>
                  <div className="links-2">
                    <a href="https://twitter.com" aria-label="Twitter">
                      <FaTwitter size={16} color="#ffffff" />
                    </a>
                  </div>
                  <div className="links-3">
                    <a href="https://instagram.com" aria-label="Instagram">
                      <FaInstagram size={16} color="#ffffff" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Last */}
            <div className="footer-end">
              <div className="underline">
                <div className="footer-lists">
                  <p className="footer-para-1">
                    Copyright © 2024 Capigo Demo1, All Rights Reserved.
                  </p>
                  <p className="footer-para">
                    Terms &amp; Conditions | Privacy Policy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
