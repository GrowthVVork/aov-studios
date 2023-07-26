import * as React from "react";
import {
  Nav,
  NavUl,
  NavUlA,
  NavLogo,
  MobileNavOpen,
  MobileNavClose,
  MobileNavSpan,
  MobileNavUl,
  MobileNavUla,
  MobileMenu,
} from "./Header.styles";
import { Menu, X } from "react-feather";

export const Header = () => {
  const [hamburger, setHamburger] = React.useState(false);

  const hamburgerMenu = () => {
    setHamburger(!hamburger);
  };

  const pageUp = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };

  const navlinks = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Services",
      link: "#services",
    },
    {
      name: "Portfolio",
      link: "#portfolio",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  return (
    <>
      <Nav>
        <NavLogo onClick={pageUp}>AOV Studios</NavLogo>
        <NavUl>
          {navlinks.map((item) => (
            <li key={item.name}>
              <NavUlA href={item.link}>{item.name}</NavUlA>
            </li>
          ))}
          <li onClick={() => hamburgerMenu()}>
            <MobileMenu>
              <Menu />
            </MobileMenu>
          </li>
        </NavUl>
      </Nav>

      {/* mobile nav */}

      {hamburger ? (
        <MobileNavOpen>
          <MobileNavSpan onClick={() => hamburgerMenu()}>
            <i>
              <X />
            </i>
          </MobileNavSpan>

          <MobileNavUl>
            {navlinks.map((item) => (
              <li key={item.name} onClick={() => hamburgerMenu()}>
                <MobileNavUla href={item.link}>{item.name}</MobileNavUla>
              </li>
            ))}
          </MobileNavUl>
        </MobileNavOpen>
      ) : (
        <MobileNavClose>
          <MobileNavSpan onClick={() => hamburgerMenu()}>
            <i>
              <X />
            </i>
          </MobileNavSpan>

          <MobileNavUl>
            {navlinks.map((item) => (
              <li key={item.name} onClick={() => hamburgerMenu()}>
                <MobileNavUla href={item.link}>{item.name}</MobileNavUla>
              </li>
            ))}
          </MobileNavUl>
        </MobileNavClose>
      )}
    </>
  );
};
