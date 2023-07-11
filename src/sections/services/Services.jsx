import React from "react";
import rightArrow from "../../assets/icons/right-arrow.png";
import architecture from "../../assets/icons/architecture.png";
import architectureServiceLarge from "../../assets/architecture-service/architecture-service-large.webp";
import architectureServiceMedium from "../../assets/architecture-service/architecture-service-medium.webp";
import architectureServiceSmall from "../../assets/architecture-service/architecture-service-small.webp";
import interior from "../../assets/icons/interior.png";
import interiorDesignServiceLarge from "../../assets/interior-design-service/interior-design-service-large.webp";
import interiorDesignServiceMedium from "../../assets/interior-design-service/interior-design-service-medium.webp";
import interiorDesignServiceSmall from "../../assets/interior-design-service/interior-design-service-small.webp";
import renovation from "../../assets/icons/renovation.png";
import renovationLarge from "../../assets/renovation-service/renovation-large.webp";
import renovationMedium from "../../assets/renovation-service/renovation-medium.webp";
import renovationSmall from "../../assets/renovation-service/renovation-small.webp";
import "./servicesStyles.css";

export const Services = () => {
  return (
    <section class="services contained" id="services">
      <h2>Services</h2>
      <div class="service-item">
        <div class="service-item-content">
          <section>
            <h3>Architecture</h3>
            <p>
            The company offers a comprehensive range of services including architecture design, documentation, 
            construction, interiors, and landscape services. Our expertise spans across various sectors such 
            as residential, institutional, commercial, industrial, and hospitality. With a wealth of design 
            experience in areas like Day-care, office (General and Healthcare), Industrial, Automotive, and 
            residential facilities, as well as multiple building site planning, we have successfully completed 
            projects involving both new constructions and renovations of existing buildings.
            </p>
            <a class="more-link">
              <span>Learn More</span>
              <img src={rightArrow} alt="More about us!" />
            </a>
          </section>
          <img src={architecture} alt="" />
        </div>

        <picture>
          <source
            srcset={architectureServiceLarge}
            media="(min-width: 850px)"
          />
          <source
            srcset={architectureServiceMedium}
            media="(min-width: 500px)"
          />
          <img src={architectureServiceSmall} alt="" />
        </picture>
      </div>

      <div class="service-item">
        <div class="service-item-content">
          <section>
            <h3>Interior Design</h3>

            <p>
            Our involvement in projects begins from the early stages of programming and site selection, 
            and extends throughout the design and construction phases. We have a deep understanding of 
            the municipal agency approval processes in our region, which has facilitated a smoother path 
            for many of our clients. Our approach emphasizes pushing the boundaries of creativity while 
            maintaining a focus on practicality and utility. We recognize the evolving nature of the 
            profession and strive to address key aspects of adapting to change.
            </p>
            <a class="more-link">
              <span>Learn More</span>
              <img src={rightArrow} alt="More about us!" />
            </a>
          </section>
          <img src={interior} alt="" />
        </div>

        <picture>
          <source
            srcset={interiorDesignServiceLarge}
            media="(min-width: 850px)"
          />
          <source
            srcset={interiorDesignServiceMedium}
            media="(min-width: 500px)"
          />
          <img src={interiorDesignServiceSmall} alt="" />
        </picture>
      </div>

      <div class="service-item">
        <div class="service-item-content">
          <section>
            <h3>Renovation</h3>
            <p>
            Above all, we are committed to our clients and prioritize their satisfaction. 
            Our entire firm is dedicated to going the extra mile when needed, ensuring 
            that we understand our clients' business needs, requirements, preferences, 
            and budget. By doing so, we consistently deliver highly satisfying outcomes 
            for the agencies and organizations responsible for the projects.
            </p>

            <a class="more-link">
              <span>Learn More</span>
              <img src={rightArrow} alt="More about us!" />
            </a>
          </section>

          <img src={renovation} alt="" />
        </div>

        <picture>
          <source srcset={renovationLarge} media="(min-width: 850px)" />
          <source srcset={renovationMedium} media="(min-width: 500px)" />
          <img src={renovationSmall} alt="" />
        </picture>
      </div>
    </section>
  );
};
