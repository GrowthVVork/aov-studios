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

  const getOffset = (element) => {
    const headerOffset = 55;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition - headerOffset;
    return offsetPosition;
  };

  const pageUp = (sectionId) => {
    const link = `#${sectionId}`;
    const targetElement = document.querySelector(link);
    if (targetElement) {
      const offsetPosition = getOffset(targetElement);
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
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
        <NavLogo onClick={() => pageUp("home")}>AOV Studios</NavLogo>
        <NavUl>
          {navlinks.map((item) => (
            <li key={item.name}>
              <NavUlA onClick={() => pageUp(item.name.toLowerCase())}>
                {item.name}
              </NavUlA>
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
                <MobileNavUla onClick={() => pageUp(item.name.toLowerCase())}>
                  {item.name}
                </MobileNavUla>
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
                <MobileNavUla onClick={() => pageUp(item.name.toLowerCase())}>
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
