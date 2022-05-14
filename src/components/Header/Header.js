import { useState } from "react";
import classes from "./Header.module.css";

import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

const Header = () => {
  const [scrolled, isScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [drop, setDrop] = useState(false);

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
          <img
            src="assets/Header/header_logo.png"
            alt="/"
            className={classes.logo}
          />
        </div>

        <div className={classes.navbox}>
          <ul className={classes.nav}>
            <li className={classes.navLink}>
              <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                Home
              </Link>
            </li>
            <li className={classes.navLink}>About</li>
            <li className={classes.navLink}>Highlights</li>
            <li
              className={`${classes.navLink} ${classes.dropLink}`}
              onClick={() => setDrop(!drop)}
            >
              {drop ? <Dropdown click={() => setDrop(!drop)} /> : ""}Events
              <FontAwesomeIcon
                size="sm"
                style={{ display: "inline-block", marginLeft: ".3rem" }}
                icon={faArrowDown}
                fade
              />
            </li>
            <li className={classes.navLink}>Contact</li>
          </ul>

          {/* <div></div> */}

          <Link to="/">
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
          <Link to="/">
            <button className={classes.btn}>Buy Tickets</button>
          </Link>

          <ul className={classes.mobileNav}>
            <li>
              <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                Home
              </Link>
            </li>
            <li>About</li>
            <li>Highlights</li>
            <li>
              <Link
                to="/events/cultural"
                style={{ color: "white", textDecoration: "none" }}
              >
                Events
              </Link>
            </li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
