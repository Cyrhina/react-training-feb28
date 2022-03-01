import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Banner from "./Banner";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <>
      <section>
        <header className="header column-3">
          <div className="header__wrapper">
            <img src="./logo/dunkin.svg" alt="logo" />
          </div>
          <Navigation />

          <div className="flex">
            <div className="burger">
              <button>
                <GiHamburgerMenu />
              </button>
            </div>
            <div className="burger__logo">
              <img src="./logo/dunkin.svg" alt="logo" />
            </div>
          </div>
        </header>
      </section>
      <Banner />
      <footer></footer>
    </>
  );
};

export default Header;
