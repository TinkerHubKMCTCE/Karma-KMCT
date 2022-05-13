import React, { Fragment } from "react";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";

import classes from "../PencilDrawing/Common.module.css";
import pic from "../PencilDrawing/pencil_drawing.png";

const PencilDrawing = () => {
  return (
    <Fragment>
      <Header />
      <div style={{ paddingTop: "10rem" }}></div>
      <section className={classes.ambaSection}>
        <div className={classes.ambassadar}>
          <div className={classes.headingBox}>
            <h3 className={classes.heading}>
              LAPIZ - Pencil Drawing Competition
            </h3>
            <p className={classes.para}>
              Are you ready to beat you boredom?and fly high in the world of
              imagination,then the opportunity is here,𝐊𝐀𝐑𝐌𝐀'𝟐𝟐 brings you
              '𝐋𝐀𝐏𝐈𝐙' 𝐏𝐞𝐧𝐜𝐢𝐥 𝐃𝐫𝐚𝐰𝐢𝐧𝐠 𝐂𝐨𝐦𝐩𝐞𝐭𝐢𝐭𝐢𝐨𝐧 ,Let your minds step into world
              of imagination...let's be engaged for while lost in thoughts...
              Let your white papers be kissed by pencil..
            </p>

            <h3 className={classes.heading}> Rules & Guidelines</h3>
            <p className={classes.para}>
              1. Entries must follow the competition theme.
            </p>
            <p className={classes.para}>
              2. It is an open event, on the spot registrations are allowed.
            </p>
            <p className={classes.para}>
              3. Only one entry per person, no group entries allowed.
            </p>
            <p className={classes.para}>4. Paper will be provided.</p>
            <p className={classes.para}>
              5. Participants are required to bring their own pencils.
            </p>
            <p className={classes.para}>
              6. Decision of the judges will be final and cannot be challenged.
            </p>
            <p className={classes.para}>
              7. There will be a time limit for completion.
            </p>
            <p className={classes.para}>
              8. A finished art should not contain any other materials.
            </p>
            <p className={classes.para}>
              9. Each participants will receive a registration number after the
              registration, it should be written on the top left corner of the
              final art.
            </p>

            <h3 className={classes.heading}> Judging Criteria</h3>
            <p className={classes.para}>1. Creativity</p>
            <p className={classes.para}>2. Neatness</p>
            <p className={classes.para}>3. Visual appeal</p>

            <a href="https://rzp.io/l/Pencil-Drawing">
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

export default PencilDrawing;
