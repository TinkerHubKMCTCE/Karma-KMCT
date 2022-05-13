import classes from "./Carousel2.module.css";
import { Fragment } from "react";

import image3 from "./Desafio.svg";
import image4 from "./Vogue.svg";
import image5 from "./LAPIZ.svg";
import image6 from "./lightMusic.svg";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

const Carousel2 = () => {
  return (
    <Fragment>
      <div className={classes.cardBox}>
        <div className={classes.headingBox}>
          <h2 className={classes.heading}>Cultural Events</h2>
        </div>

        <Carousel
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={3000}
          infiniteLoop={true}
        >
          <div className={classes.box}>
            <Link to="/culturals" style={{ textDecoration: "none" }}>
              <div className={classes.boxContent1}>
                <img className={classes.boxImage1} src={image3} alt="" />
                <h3 className={classes.boxHeading1}>
                  Desafio - Dance Competition
                </h3>

                <div style={{ paddingTop: "1rem" }}></div>

                <button className={classes.btn}>View More !</button>
              </div>
            </Link>

            <Link to="/culturals" style={{ textDecoration: "none" }}>
              <div className={classes.boxContent1}>
                <img className={classes.boxImage1} src={image4} alt="" />
                <h3 className={classes.boxHeading1}>
                  Vogue Fiesta - Fashion Show
                </h3>

                <div style={{ paddingTop: "1rem" }}></div>

                <button className={classes.btn}>View More !</button>
              </div>
            </Link>

            <Link to="/culturals" style={{ textDecoration: "none" }}>
              <div className={classes.boxContent1}>
                <img className={classes.boxImage1} src={image5} alt="" />
                <h3 className={classes.boxHeading1}>
                  LAPIZ - Pencil Drawing Competition
                </h3>

                <div style={{ paddingTop: "1rem" }}></div>

                <button className={classes.btn}>View More !</button>
              </div>
            </Link>
          </div>

          <div className={classes.box}>
            <Link to="/culturals" style={{ textDecoration: "none" }}>
              <div className={classes.boxContent1}>
                <img
                  className={classes.boxImage1}
                  src={image6}
                  alt="LightMusic"
                />
                <h3 className={classes.boxHeading1}>Light Music</h3>

                <div style={{ paddingTop: "1rem" }}></div>

                <button className={classes.btn}>View More !</button>
              </div>
            </Link>
          </div>
        </Carousel>
      </div>
    </Fragment>
  );
};

export default Carousel2;
