import React from "react";
import rightArrow from "../../assets/icons/right-arrow.png";
import one from "../../assets/blog/1.webp";
import two from "../../assets/blog/2.webp";
import three from "../../assets/blog/3.webp";
import "./blogStyles.css";

export const Blog = () => {
  return (
    <div className="blog contained">
      <section>
        <h2>Blog</h2>

        <p>Get the latest news and opinions from our industry experts.</p>
      </section>

      <div className="posts">
        <section className="post-item">
          <h3>Budget friendly home interior designs</h3>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            tempore reprehenderit perferendis debitis nemo eveniet optio quasi
            amet corporis nostrum eaque possimus
          </p>

          <a className="more-link">
            <span>Read More</span>
            <img src={rightArrow} alt="" />
          </a>

          <img src={one} alt="" />
        </section>

        <section className="post-item">
          <h3>Home office design tips</h3>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            tempore reprehenderit perferendis debitis nemo eveniet optio quasi
            amet corporis nostrum eaque possimus tempora error, omnis architecto
            perspiciatis quaerat molestiae ducimus.
          </p>

          <a className="more-link">
            <span>Read More</span>
            <img src={rightArrow} alt="" />
          </a>

          <img src={two} alt="" />
        </section>

        <section className="post-item">
          <h3>Top 10 home interior design tips</h3>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            tempore reprehenderit perferendis debitis nemo eveniet optio quasi
            amet corporis nostrum eaque possimus tempora error,
          </p>

          <a className="more-link">
            <span>Read More</span>
            <img src={rightArrow} alt="" />
          </a>

          <img src={three} alt="" />
        </section>
      </div>
    </div>
  );
};
