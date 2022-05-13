import { useState } from "react";
import classes from "./Header.module.css";
// import logo from "./Grey-2.png";

import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";

const Header = () => {
  const [scrolled, isScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);

  window.onscroll = () => {
    isScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <header
      className={`${!scrolled ? classes.header : classes.scrolledHeader}`}
    >
      <div className={classes.elements}>
        <div className={classes.logobox}>
          <img src="assets/header_logo.png" alt="/" className={classes.logo} />
        </div>

        <div className={classes.navbox}>
          <ul className={classes.nav}>
            <li>
              <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                Home
              </Link>
            </li>
            <li>About</li>
            <li>Highlights</li>
            <li>
              <Link
                to="/culturals"
                style={{ color: "white", textDecoration: "none" }}
              >
                Culturals
              </Link>
            </li>
            <li>Contact</li>
          </ul>
          <div></div>

          <Link to="">
            <button className={classes.btn}>Buy Tickets</button>
          </Link>
          <div className={classes.hamburger} onClick={() => setMobile(!mobile)}>
            {mobile ? (
              <GrClose style={{ color: "white" }} size={20} />
            ) : (
              <FiMenu size={20} />
            )}
          </div>
        </div>

        <div className={`${!mobile ? classes.none : classes.mobileBox}`}>
          <button className={classes.btn1}>Buy Tickets</button>

          <ul className={classes.mobileNav}>
            <li>Home</li>
            <Element
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <li>About</li>
            </Element>
            <li>Highlights</li>
            <li>Cultural</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
