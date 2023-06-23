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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
              perspiciatis pariatur atque debitis officia autem sit
              consequuntur, voluptatibus quas qui veniam provident quia quae non
              eum animi itaque numquam repudiandae.
            </p>

            <a class="more-link">
              <span>Learn More</span>
              <img src={rightArrow} alt="" />
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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
              perspiciatis pariatur atque debitis officia autem sit
              consequuntur, voluptatibus quas qui veniam provident quia quae non
              eum animi itaque numquam repudiandae.
            </p>

            <a class="more-link">
              <span>Learn More</span>
              <img src={rightArrow} alt="" />
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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
              perspiciatis pariatur atque debitis officia autem sit
              consequuntur, voluptatibus quas qui veniam provident quia quae non
              eum animi itaque numquam repudiandae.
            </p>

            <a class="more-link">
              <span>Learn More</span>
              <img src={rightArrow} alt="" />
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
