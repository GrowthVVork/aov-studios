import React from "react";
import rightArrow from "../../assets/icons/right-arrow.png";
import architecture from "../../assets/icons/architecture.png";
import architectureService from "../../assets/architecture-service/architecture-service.jpg";
import interior from "../../assets/icons/interior.png";
import interiorDesignService from "../../assets/interior-design-service/interior-design-service.jpg";
import renovation from "../../assets/icons/renovation.png";
import renovationService from "../../assets/renovation-service/renovation-design-service.jpg";
import "./servicesStyles.css";

export const Services = () => {
  return (
    <section className="services contained" id="services">
      <h2>Services</h2>
      <div className="service-item">
        <div className="service-item-content">
          <section>
            <h3>Architecture</h3>
            <p>
              The company offers a comprehensive range of services including
              architecture design, documentation, construction, interiors, and
              landscape services. Our expertise spans across various sectors
              such as residential, institutional, commercial, industrial, and
              hospitality. With a wealth of design experience in areas like
              Day-care, office (General and Healthcare), Industrial, Automotive,
              and residential facilities, as well as multiple building site
              planning, we have successfully completed projects involving both
              new constructions and renovations of existing buildings.
            </p>
            <a className="more-link" href="#services">
              <span>Learn More</span>
              <img src={rightArrow} alt="More about us!" />
            </a>
          </section>
          <img src={architecture} alt="" />
        </div>
        <picture>
          <img src={architectureService} alt="" />
        </picture>
      </div>

      <div className="service-item">
        <div className="service-item-content">
          <section>
            <h3>Interior Design</h3>
            <p>
              Our involvement in projects begins from the early stages of
              programming and site selection, and extends throughout the design
              and construction phases. We have a deep understanding of the
              municipal agency approval processes in our region, which has
              facilitated a smoother path for many of our clients. Our approach
              emphasizes pushing the boundaries of creativity while maintaining
              a focus on practicality and utility. We recognize the evolving
              nature of the profession and strive to address key aspects of
              adapting to change.
            </p>
            <a className="more-link" href="#services">
              <span>Learn More</span>
              <img src={rightArrow} alt="More about us!" />
            </a>
          </section>
          <img src={interior} alt="" />
        </div>
        <picture>
          <img src={interiorDesignService} alt="" />
        </picture>
      </div>

      <div className="service-item">
        <div className="service-item-content">
          <section>
            <h3>Construction Design</h3>
            <p>
              Above all, we are committed to our clients and prioritize their
              satisfaction. Our entire firm is dedicated to going the extra mile
              when needed, ensuring that we understand our clients' business
              needs, requirements, preferences, and budget. By doing so, we
              consistently deliver highly satisfying outcomes for the agencies
              and organizations responsible for the projects.
            </p>
            <a className="more-link" href="#services">
              <span>Learn More</span>
              <img src={rightArrow} alt="More about us!" />
            </a>
          </section>
          <img src={renovation} alt="" />
        </div>
        <picture>
          <img src={renovationService} alt="" />
        </picture>
      </div>
    </section>
  );
};
