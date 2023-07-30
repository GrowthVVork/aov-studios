import * as React from "react";
import { Menu, X } from "react-feather";
import {
  Nav,
  NavLogo,
  NavUl,
  NavUlA,
  MobileMenu,
  MobileNavClose,
  MobileNavOpen,
  MobileNavSpan,
  MobileNavUl,
  MobileNavUla,
} from "./Header.styles";

export const Header = () => {
  const [hamburger, setHamburger] = React.useState(false);

  const hamburgerMenu = () => {
    setHamburger(!hamburger);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 55;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollBy({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const navlinks = [
    {
      name: "Contact",
      link: "contact",
    },
    {
      name: "Portfolio",
      link: "portfolio",
    },
    {
      name: "Services",
      link: "services",
    },
    {
      name: "About",
      link: "about",
    },
    {
      name: "Home",
      link: "home",
    },
  ];

  return (
    <>
      <Nav>
        <NavLogo onClick={() => scrollToSection("home")}>AOV Studios</NavLogo>
        <NavUl>
          {navlinks.map((item) => (
            <li key={item.name}>
              <NavUlA onClick={() => scrollToSection(item.link)}>
                {item.name}
              </NavUlA>
            </li>
          ))}
          <li onClick={hamburgerMenu}>
            <MobileMenu>
              <Menu size={28} />
            </MobileMenu>
          </li>
        </NavUl>
      </Nav>

      {/* mobile nav */}
      {hamburger ? (
        <MobileNavOpen>
          <MobileNavSpan onClick={() => hamburgerMenu()}>
            <X size={28} />
          </MobileNavSpan>

          <MobileNavUl style={{ flexDirection: "column-reverse" }}>
            {navlinks.map((item) => (
              <li key={item.name} onClick={() => hamburgerMenu()}>
                <MobileNavUla onClick={() => scrollToSection(item.link)}>
                  {item.name}
                </MobileNavUla>
              </li>
            ))}
          </MobileNavUl>
        </MobileNavOpen>
      ) : (
        <MobileNavClose>
          <MobileNavSpan onClick={() => hamburgerMenu()}>
            <X size={28} />
          </MobileNavSpan>
          <MobileNavUl style={{ flexDirection: "column-reverse" }}>
            {navlinks.map((item) => (
              <li key={item.name} onClick={() => hamburgerMenu()}>
                <MobileNavUla onClick={() => scrollToSection(item.link)}>
                  {item.name}
                </MobileNavUla>
              </li>
            ))}
          </MobileNavUl>
        </MobileNavClose>
      )}
    </>
  );
};
