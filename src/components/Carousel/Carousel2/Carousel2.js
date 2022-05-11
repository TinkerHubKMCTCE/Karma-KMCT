import classes from "./Carousel2.module.css";
import { Fragment } from "react";

import image3 from "./Desafio.svg";
import image4 from "./Vogue.svg";
import image5 from "./Aghaidh.svg";

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
          // autoPlay={true}
          interval={3000}
          // infiniteLoop={true}
        >
          <div className={classes.box}>
            <Link to="/culturals" style={{ textDecoration: "none" }}>
              <div className={classes.boxContent1}>
                <img className={classes.boxImage1} src={image3} alt="" />
                <h3 className={classes.boxHeading1}>
                  Desafio - Dance Competition
                </h3>
                {/* <p className={classes.para}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Deleniti, officia?
                </p> */}
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
              {" "}
              <div className={classes.boxContent1}>
                <img className={classes.boxImage1} src={image5} alt="" />
                <h3 className={classes.boxHeading1}>Aghaidh - Face Painting</h3>

                <div style={{ paddingTop: "1rem" }}></div>

                <button className={classes.btn}>View More !</button>
              </div>
            </Link>
          </div>

          {/* <div className={classes.box}>
            <Link to="/culturals" style={{ textDecoration: "none" }}>
              <div className={classes.boxContent1}>
                <img className={classes.boxImage1} src={image3} alt="" />
                <h3 className={classes.boxHeading1}>Lorem Ipsum</h3>
                <p className={classes.para}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Deleniti, officia?
                </p>
              </div>
            </Link>

            <Link to="/culturals" style={{ textDecoration: "none" }}>
              <div className={classes.boxContent1}>
                <img className={classes.boxImage1} src={image4} alt="" />
                <h3 className={classes.boxHeading1}>Lorem Ipsum</h3>
                <p className={classes.para}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis, dignissimos.
                </p>
              </div>
            </Link>

            <Link to="/culturals" style={{ textDecoration: "none" }}>
              {" "}
              <div className={classes.boxContent1}>
                <img className={classes.boxImage1} src={image5} alt="" />
                <h3 className={classes.boxHeading1}>Lorem Ipsum</h3>
                <p className={classes.para}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis, dignissimos.
                </p>
              </div>
            </Link>
          </div> */}
        </Carousel>
      </div>
    </Fragment>
  );
};

export default Carousel2;
