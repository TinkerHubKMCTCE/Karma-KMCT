import classes from "./Ambassadar.module.css";
import Mobile from "./Mobile.svg";
import Backdrop from "@mui/material/Backdrop";

import { useState } from "react";

const Ambassadar = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className={classes.ambaSection}>
      <div className={classes.ambassadar}>
        <div className={classes.headingBox}>
          <h3 className={classes.heading}>Karma 22 Ambassadar Program</h3>
          <p className={classes.para}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
            officiis tenetur facere voluptas, quisquam ut totam hic veritatis
            saepe temporibus odit odio laudantium dolorum? Vel?
          </p>
          <p className={classes.para}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid,
            excepturi.
          </p>
          <button className={classes.btn} onClick={() => setOpen(!open)}>
            Register Now !
          </button>
        </div>
        <div className={classes.imgBox}>
          <img className={classes.img} src={Mobile} alt="Ambassador" />
        </div>
      </div>

      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <div className={classes.backdrop}>
          <div
            className={classes.bkdHeadingBox}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <h3 className={classes.bkdHeading}>Register</h3>
            <button className={classes.btn1} onClick={() => setOpen(!open)}>
              Close
            </button>
          </div>
          <div className={classes.inputBox}>
            <input
              placeholder="Full Name"
              type="text"
              className={classes.input}
            />
            <input
              placeholder="College"
              type="text"
              className={classes.input}
            />
            <input placeholder="Email" type="text" className={classes.input} />
            <input
              placeholder="Phone number"
              type="text"
              className={classes.input}
            />
          </div>
          <button className={classes.btn1} onClick={() => setOpen(!open)}>
            Sign Up
          </button>
        </div>
      </Backdrop>
    </section>
  );
};

export default Ambassadar;
