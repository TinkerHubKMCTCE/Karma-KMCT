import React, { Fragment } from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import classes from "../PencilDrawing/Common.module.css";
import pic from "../VogueFiesta/fashin _show.png";

const VogueFiesta = () => {
  return (
    <Fragment>
      <Header />
      <div style={{ paddingTop: "10rem" }}></div>
      <section className={classes.ambaSection}>
        <div className={classes.ambassadar}>
          <div className={classes.headingBox}>
            <h3 className={classes.heading}>Vogue Fiesta - Fashion Show</h3>
            <p className={classes.para}>
              Are you a fashionista or a dressy, kicky, sassy person? If yes,
              then what are you waiting for? KARMA '22 is here with 'VOGUE
              FIESTA' Fashion show' ! Style is a way to say who you are without
              having to speak. Create your own visual style. Let it be unique
              for yourself and yet identifiable for others ! All fashion lovers
              do participate and make sure you have registered.
            </p>
            {/* <p className={classes.para}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid,
              excepturi.
            </p> */}

            <h3 className={classes.heading}> Rules & Guidelines</h3>
            <p className={classes.para}>
              1. Cross college teams will not be awarded any Karma points if
              they win.
            </p>
            <p className={classes.para}>
              2. A minimum of 6 and a maximum of 30 models per team are allowed.
            </p>
            <p className={classes.para}>
              3. One participant cannot be a part of two participating teams.
            </p>
            <p className={classes.para}>
              4. Time limit per team: 10 minutes empty to empty.
            </p>
            <p className={classes.para}>
              5. An additional 1 minute, if required, will be provided for
              narration only.Exceeding the time limit will lead to team
              disqualification.
            </p>
            <p className={classes.para}>
              6. Participating teams should upload a video of their past
              performance to a drive, and send the link along with the following
              information to karmakmct2022@gmail.com by 15th May 2022.
            </p>
            <p className={classes.para}>
              7. College Name (and Team Name, if any) -Name and Contact Info of
              any 3 team members.
            </p>
            <p className={classes.para}>
              8. List of Team members Shortlisted teams will be informed by
              mail.
            </p>
            <p className={classes.para}>
              9. Background music should be sent by email to
              karmakmct2022@gmail.com as a new email named VF-BGM-[College
              Name]. Both the subject of the mail and the Background music
              should be named in this format.
            </p>
            <p className={classes.para}>
              10. The deadline for the same shall be informed after confirmation
              of participation. Presenting banners, posters or other materials
              directly displaying the theme is prohibited.
            </p>
            <a href="https://rzp.io/l/Fashion-Show">
              <button className={classes.btn}>Register Now !</button>
            </a>
          </div>
          <div className={classes.imgBox}>
            <img className={classes.img} src={pic} alt="VogueFiesta" />
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};

export default VogueFiesta;
