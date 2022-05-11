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
        </div>
        <div className={classes.linkBox}>
          <ul className={classes.links}>
            <li>Contact Us</li>
            <li>
              <a
                href="https://docs.google.com/document/d/1K0En27BTf6KJB2eHZmnr7BAMDWK8T83--8HJOu-GkA0/edit?usp=sharing"
                style={{ color: "white" }}
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="https://docs.google.com/document/d/1VOnAodNTeF8ShOCxxVb_AXnxLKg2jKZCUY0QxbQd4nE/edit?usp=sharing"
                style={{ color: "white" }}
              >
                Terms & Conditions
              </a>
            </li>
            <li>
              <a
                href="https://docs.google.com/document/d/1K0En27BTf6KJB2eHZmnr7BAMDWK8T83--8HJOu-GkA0/edit?usp=sharing"
                style={{ color: "white" }}
              >
                Cancellation / Refund Policy
              </a>
            </li>
          </ul>
          <div className={classes.socialIcons}>
            <a href="https://www.facebook.com/kmctce.karma">
              <img className={classes.social} src={social1} alt="" />
            </a>
            <a href="https://www.instagram.com/karma_kmct_/">
              <img className={classes.social} src={social2} alt="" />
            </a>
            <a href="https://www.youtube.com/channel/UCKM314A0KndJAEpvEnaxO2g">
              <img className={classes.social} src={social3} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className={classes.copyright}>
        <h2>Karma'22 | All Rights Reserved © Kedilo</h2>
      </div>
    </footer>
  );
};

export default Footer;
