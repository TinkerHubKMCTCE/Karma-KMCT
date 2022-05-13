import React, { Fragment } from "react";
import classes from "./Common.module.css";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

const Desafio = () => {
  return (
    <Fragment>
      <Header />
      <div style={{ paddingTop: "10rem" }}></div>
      <section className={classes.ambaSection}>
        <div className={classes.ambassadar}>
          <div className={classes.headingBox}>
            <h3 className={classes.heading}>Desafio - Dance Competiton</h3>
            <p className={classes.para}>
              Dancers don't need wings to fly. Waiting for such an Opportunity?
              Then here is the chance, KARMA '22 brings you the 'Desafio' dance
              competition !! Grab your chance now, dance from your heart and let
              your passion shine through !
            </p>
            <h3 className={classes.heading}> Rules & Guidelines</h3>
            <p className={classes.para}>
              1. No participants in group: min 4 and max 12 students.
            </p>
            <p className={classes.para}> 2. Time limit : 7+1 minutes.</p>
            <p className={classes.para}>
              3. Theme : Folk dance/ Patriotic/ Religious/ Hindi.
            </p>
            <p className={classes.para}>
              4. Style : Any style of dance (depend on participant).
            </p>
            <p className={classes.para}>
              5. Participants are required to bring their own music CDs and
              props.
            </p>
            <p className={classes.para}>
              6. Confirm the song and provide the CD to the concerned faculty
              co-coordinator of the event.
            </p>
            <p className={classes.para}>
              7. There should be only one entry in front of each college.
            </p>
            <p className={classes.para}>
              8. Judges can stop the dance in between if they feel it is
              irrelevant.
            </p>

            <a
              href="https://rzp.io/l/Desafio-Dance"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={classes.btn}>Register Now !</button>
            </a>
          </div>
          <div className={classes.imgBox}>
            <img
              className={classes.img}
              src="assets/desafio.png"
              alt="Desafio"
            />
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};

export default Desafio;
