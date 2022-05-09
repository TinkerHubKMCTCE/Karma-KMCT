import classes from "./Carousel1.module.css"
import { Fragment } from "react"

import image from "./image 6.png";

const Carousel1 = () => {
    return (
        <Fragment>
        <div className={classes.cardBox}>
          <div className={classes.headingBox}>
            <h2 className={classes.heading}>Highlights</h2>
          </div>

          <div className={classes.box}>
            <div className={classes.boxContent}>
              <img className={classes.boxImage} src={image} alt="" />
              <h3 className={classes.boxHeading}>Lorem Ipsum</h3>
              <span className={classes.span}>Actor</span>
            </div>

            <div className={classes.boxContent}>
              <img className={classes.boxImage} src={image} alt="" />
              <h3 className={classes.boxHeading}>Lorem Ipsum</h3>
              <span className={classes.span}>Actor</span>
            </div>

            <div className={classes.boxContent}>
              <img className={classes.boxImage} src={image} alt="" />
              <h3 className={classes.boxHeading}>Lorem Ipsum</h3>
              <span className={classes.span}>Actor</span>
            </div>
          </div>
        </div>
        </Fragment>
    )
}

export default Carousel1;