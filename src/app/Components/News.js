import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import "../Styles/News.css";

const Section10 = () => {
  const blogPosts = [
    {
      category: "Business",
      date: "14 JUL, 2023",
      title: "Determine and get in touch with....",
      imgSrc:
        "https://capigo-demo.pbminfotech.com/html-demo/images/homepage-01/blog/blog-01.jpg",
    },
    {
      category: "ECONOMY",
      date: "14 JUL, 2023",
      title: "Measure These 8 Crucial Brand Awareness....",
      imgSrc:
        "https://capigo-demo.pbminfotech.com/html-demo/images/homepage-01/blog/blog-02.jpg",
    },
    {
      category: "FINANCE",
      date: "14 JUL, 2023",
      title: "Keep aware of new current....",
      imgSrc:
        "https://capigo-demo.pbminfotech.com/html-demo/images/homepage-01/blog/blog-03.jpg",
    },
  ];

  return (
    <section className="section-10">
      <article className="article-10">
        <div className="first-container">
          <div className="image-container">
            <img
              src="https://capigo-demo.pbminfotech.com/html-demo/images/homepage-01/bg/blog-bg.jpg"
              alt=""
              className="background-image"
            />
          </div>
          <div className="right-container-2">
            <div className="right-content-2">
              <h5>LATEST BLOG</h5>
              <h1>
                Latest news <br />
                coming
              </h1>
            </div>
            {blogPosts.map((post, index) => (
              <div className="container-image-1-content" key={index}>
                <div className="col-img">
                  <div className="col-img-1">
                    <img src={post.imgSrc} alt="" className="blog-image" />
                  </div>
                  <div className="heading-text">
                    <span>
                      <h5>{post.category}</h5>
                      <h5>{post.date}</h5>
                    </span>
                    <div className="par">
                      <h1 className="hov">{post.title}</h1>
                    </div>
                    <div className="arrow">
                      <a href="#">
                        <MdOutlineArrowOutward
                          className="arrow-icon"
                          style={{ color: "black" }}
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>
    </section>
  );
};

export default Section10;
