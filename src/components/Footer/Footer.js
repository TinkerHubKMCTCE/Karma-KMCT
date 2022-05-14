import classes from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className={classes.footer}>
        <div className={classes.row}>
            <div className={classes.col}>
              <img className={classes.karma} src="assets/Footer/footer_karma.svg" alt="Karma logo" />
              <p className={classes.para}>Annual national level techno managerial cultural extravaganza of the KMCT College of Engineering. Karma enables brilliant minds to compete, discuss ideas, educate others about new technical breakthroughs, and be a part of the tech platform.</p>
            </div>

            <div className={classes.col}>
              <h3>Contact us</h3>
              <p>KMCT College Of Engineering, Kallanthode</p>
              <p>NITC - P.O</p>
              <p>Kozhikode - 673601</p>
              <p className={classes.email}>karmakmct22@gmail.com</p>
              <p>0495 2289227</p>
            </div>

            <div className={`${classes.col} ${classes.links}`}>
                <h3>Links</h3>
                <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Events</li>
                  <li>Register</li>
                  <li>Find us</li>
                </ul>
            </div>

            <div className={classes.col}>
            <h3>Follow us on</h3>
              <div className={classes.socialIcons}>
                <a href="https://instagram.com/karma.kmct"><FontAwesomeIcon className={classes.icons} icon={faInstagram} /></a>
                <a href="https://www.youtube.com/channel/UCKM314A0KndJAEpvEnaxO2g"><FontAwesomeIcon className={classes.icons} icon={faYoutube} /></a>
                <a href="https://www.facebook.com/karma.kmct/"><FontAwesomeIcon className={classes.icons} icon={faFacebook} /></a>
              </div>
            </div>
        </div>
        <hr className={classes.hr} />
        <p className={classes.copyright}>Karma KMCT &#169; - All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
