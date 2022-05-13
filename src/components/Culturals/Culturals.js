import classes from "../Ambassadar/Ambassadar.module.css";
import Mobile from "../Ambassadar/Mobile.svg";

import { Fragment } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import Spacing from "./Spacing";

const Culturals = () => {
  return (
    <Fragment>
      <Header />
      <div style={{ paddingTop: "6rem" }}></div>

      <Spacing />

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

            {/* <p className={classes.para}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid,
              excepturi.
            </p> */}

            <Link to="/desafio">
              <button className={classes.btn}>View Details !</button>
            </Link>
          </div>

          <div className={classes.imgBox}>
            <img className={classes.img} src={Mobile} alt="Ambassador" />
          </div>
        </div>

        <Spacing />

        {/* Vogue Fiesta */}

        <section className={classes.ambaSection}>
          <div className={classes.ambassadar}>
            <div className={classes.headingBox}>
              <h3 className={classes.heading}>Vogue Fiesta - Fashion Show</h3>
              <p className={classes.para}>
                Are you a fashionista or a dressy, kicky, sassy person? If yes,
                then what are you waiting for? KARMA '22 is here with 'VOGUE
                FIESTA' Fashion show' ! Style is a way to say who you are
                without having to speak. Create your own visual style. Let it be
                unique for yourself and yet identifiable for others ! All
                fashion lovers do participate and make sure you have registered.
              </p>

              <Link to="/voguefiesta">
                <button className={classes.btn}>View Details !</button>
              </Link>
            </div>
            <div className={classes.imgBox}>
              <img className={classes.img} src={Mobile} alt="Ambassador" />
            </div>
          </div>
        </section>

        <Spacing />

        {/* Aghaidh */}
        {/* <section className={classes.ambaSection}>
          <div className={classes.ambassadar}>
            <div className={classes.headingBox}>
              <h3 className={classes.heading}>Aghaidh - Face Painting</h3>
              <p className={classes.para}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
                officiis tenetur facere voluptas, quisquam ut totam hic
                veritatis saepe temporibus odit odio laudantium dolorum? Vel?
              </p>

              <p className={classes.para}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aliquid, excepturi.
              </p>

              <Link to="/aghaidh">
                <button className={classes.btn}>View Details !</button>
              </Link>
            </div>
          </div>
        </section> */}

        {/* Pencil Drawing */}

        <section className={classes.ambaSection}>
          <div className={classes.ambassadar}>
            <div className={classes.headingBox}>
              <h3 className={classes.heading}>
                LAPIZ - Pencil Drawing Competition
              </h3>
              <p className={classes.para}>
                Are you ready to beat you boredom?and fly high in the world of
                imagination,then the opportunity is here,𝐊𝐀𝐑𝐌𝐀'𝟐𝟐 brings you
                '𝐋𝐀𝐏𝐈𝐙' 𝐏𝐞𝐧𝐜𝐢𝐥 𝐃𝐫𝐚𝐰𝐢𝐧𝐠 𝐂𝐨𝐦𝐩𝐞𝐭𝐢𝐭𝐢𝐨𝐧 ,Let your minds step into
                world of imagination...let's be engaged for while lost in
                thoughts... Let your white papers be kissed by pencil..
              </p>

              <Link to="/pencildrawing">
                <button className={classes.btn}>View Details !</button>
              </Link>
            </div>
            <div className={classes.imgBox}>
              <img className={classes.img} src={Mobile} alt="Ambassador" />
            </div>
          </div>
        </section>

        <Spacing />

        {/* Light Music */}

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

              <Link to="/lightmusic">
                <button className={classes.btn}>View Details !</button>
              </Link>
            </div>
            <div className={classes.imgBox}>
              <img className={classes.img} src={Mobile} alt="Ambassador" />
            </div>
          </div>
        </section>

        <Spacing />
      </section>
      <Footer />
    </Fragment>
  );
};

export default Culturals;
