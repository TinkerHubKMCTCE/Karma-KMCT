import React, { Fragment } from "react";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";

import classes from "../LightMusic/Common.module.css";
import pic from "../LightMusic/lightmusic.png";

const LightMusic = () => {
  return (
    <Fragment>
      <Header />
      <div style={{ paddingTop: "10rem" }}></div>
      <section className={classes.ambaSection}>
        <div className={classes.ambassadar}>
          <div className={classes.headingBox}>
            <h3 className={classes.heading}>Light Music</h3>
            <p className={classes.para}>
              Music is the universal language of mankind. Where words fail,
              music speaks. 𝐊𝐀𝐑𝐌𝐀'𝟐𝟐 is here with ' 𝐋𝐢𝐠𝐡𝐭 𝐌𝐮𝐬𝐢𝐜 𝐂𝐨𝐦𝐩𝐞𝐭𝐢𝐭𝐢𝐨𝐧 '.
              Do participate and never miss a chance to show up your passion.
              Let your words speak through music !
            </p>
            <h3 className={classes.heading}> Rules & Guidelines</h3>
            <p className={classes.para}>
              1. Participant should choose a meaningful song of about 5 minutes
              duration.
            </p>
            <p className={classes.para}>
              2. The song should not be devotional, choral or from Films.
            </p>
            <p className={classes.para}>
              3. Use of single instrument other than organ by the participant is
              permitted.
            </p>
            <h3 className={classes.heading}> Judging Criteria</h3>
            <p className={classes.para}>1. Swaram</p>
            <p className={classes.para}>2. Ragam</p>
            <p className={classes.para}>3. Taalam</p>{" "}
            <p className={classes.para}>
              4. Composition and overall impression
            </p>
            <a href="https://pages.razorpay.com/Karma22LightMusic">
              <button className={classes.btn}>Register Now !</button>
            </a>
          </div>
          <div className={classes.imgBox}>
            <img className={classes.img} src={pic} alt="PencilDrawing" />
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};

export default LightMusic;
