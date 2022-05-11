import classes from "./Carousel2.module.css";
import { Fragment } from "react";

import image3 from "./Rectangle 36.png";
import image4 from "./Rectangle 37.png";
import image5 from "./Rectangle 38.png";

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
            <Link to="/desafio" style={{ textDecoration: "none" }}>
              <div className={classes.boxContent1}>
                <img className={classes.boxImage1} src={image3} alt="" />
                <h3 className={classes.boxHeading1}>Lorem Ipsum</h3>
                <p className={classes.para}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Deleniti, officia?
                </p>
              </div>
            </Link>

            <div className={classes.boxContent1}>
              <img className={classes.boxImage1} src={image4} alt="" />
              <h3 className={classes.boxHeading1}>Lorem Ipsum</h3>
              <p className={classes.para}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Corporis, dignissimos.
              </p>
            </div>

            <div className={classes.boxContent1}>
              <img className={classes.boxImage1} src={image5} alt="" />
              <h3 className={classes.boxHeading1}>Lorem Ipsum</h3>
              <p className={classes.para}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Corporis, dignissimos.
              </p>
            </div>
          </div>
          <div className={classes.box}>
            <div className={classes.boxContent1}>
              <img className={classes.boxImage1} src={image3} alt="" />
              <h3 className={classes.boxHeading1}>Lorem Ipsum</h3>
              <p className={classes.para}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Deleniti, officia?
              </p>
            </div>

            <div className={classes.boxContent1}>
              <img className={classes.boxImage1} src={image4} alt="" />
              <h3 className={classes.boxHeading1}>Lorem Ipsum</h3>
              <p className={classes.para}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Corporis, dignissimos.
              </p>
            </div>

            <div className={classes.boxContent1}>
              <img className={classes.boxImage1} src={image5} alt="" />
              <h3 className={classes.boxHeading1}>Lorem Ipsum</h3>
              <p className={classes.para}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Corporis, dignissimos.
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    </Fragment>
  );
};

export default Carousel2;
