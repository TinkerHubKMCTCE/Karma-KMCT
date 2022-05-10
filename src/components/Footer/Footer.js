import classes from "./Footer.module.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import social1 from "./social1.png";
import social2 from "./social2.png";
import social3 from "./social3.png";
import footer_kmct from "./footer_kmct.svg";
import footer_karma from "./footer_karma.svg";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.elements}>
        <div className={classes.logoBox}>
          <img src={footer_karma} alt="/" className={classes.footer_karma} />
          <img src={footer_kmct} alt="/" className={classes.footer_kmct} />
          {/* <img className={classes.logo1} src={Grey2} alt="/" />
          <img className={classes.logo2} src={Group} alt="/" /> */}
        </div>
        <div className={classes.linkBox}>
          <ul className={classes.links}>
            <li>Home</li>
            <li>About</li>
            <li>Events</li>
            <li>Contact Us</li>
          </ul>
          <div className={classes.socialIcons}>
            {/* <FontAwesomeIcon icon="fa-brands fa-instagram" /> */}
            <img className={classes.social} src={social1} alt="" />
            <img className={classes.social} src={social2} alt="" />
            <img className={classes.social} src={social3} alt="" />
          </div>
        </div>
      </div>
      <div className={classes.copyright}>
        <h2>© 2022 kedilo.com</h2>
      </div>
    </footer>
  );
};

export default Footer;
