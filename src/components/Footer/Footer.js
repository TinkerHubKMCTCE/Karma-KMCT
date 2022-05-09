import classes from "./Footer.module.css";

import Grey2 from "./Grey-2.png";
import Group from "./Group 10.png";
import social1 from "./social1.png";
import social2 from "./social2.png";
import social3 from "./social3.png";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.elements}>
        <div className={classes.logoBox}>
          <img className={classes.logo1} src={Grey2} alt="/" />
          <img className={classes.logo2} src={Group} alt="/" />
        </div>
        <div className={classes.linkBox}>
          <ul className={classes.links}>
            <li>Home</li>
            <li>About</li>
            <li>Events</li>
            <li>Contact Us</li>
          </ul>
          <div className={classes.socialIcons}>
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
