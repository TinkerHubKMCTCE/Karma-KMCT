import React, { Fragment } from "react";
import classes from "./Common.module.css";
import pic from "../Desafio/pic.png";
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
              officiis tenetur facere voluptas, quisquam ut totam hic veritatis
              saepe temporibus odit odio laudantium dolorum? Vel?
            </p>
            <p className={classes.para}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid,
              excepturi.
            </p>
            <a href="https://pages.razorpay.com/pl_JTqaCQgO7vIKE6/view">
              <button className={classes.btn}>Register Now !</button>
            </a>
          </div>
          <div className={classes.imgBox}>
            <img className={classes.img} src={pic} alt="Desafio" />
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};

export default Desafio;
