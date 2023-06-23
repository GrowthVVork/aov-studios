import React from "react";
import "./footerStyles.css";

export const Footer = () => {
  return (
    <footer id="footer">
      <div class="contained">
        <section class="footer-services">
          <h2>Services</h2>
          <ul>
            <li>Architecture</li>
            <li>Interior design</li>
            <li>Renovation</li>
          </ul>
        </section>

        <section class="footer-address">
          <h2>Address</h2>
          <address>
            AOV Studios
            <br />
            Near Airport, Indore
            <br />
            MP, India
          </address>
        </section>

        <section class="footer-contact">
          <h2>Contact</h2>
          <span>Onal Kothari Bhagat</span>
          <span>enter@email.com</span>
        </section>
      </div>
    </footer>
  );
};
