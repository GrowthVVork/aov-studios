import React from "react";
import "./footerStyles.css";

export const Footer = () => {
  return (
    <footer id="footer">
      <div className="contained">
        <section className="footer-services">
          <h2>Services</h2>
          <ul>
            <li>Architecture</li>
            <li>Interior Design</li>
            <li>Landscape Design</li>
            <li>Construction Design</li>
          </ul>
        </section>

        <section className="footer-address">
          <h2>Address</h2>
          <address>
            AOV Studios
            <br />
            Narayan Bagh,
            <br />
            Indore (M.P.)
            <br />
            India
          </address>
        </section>

        <section className="footer-contact">
          <h2>Contact Us </h2>
          <span>+91-7582898292</span>
          <span>studiosaov@gmail.com</span>
        </section>
      </div>
    </footer>
  );
};
