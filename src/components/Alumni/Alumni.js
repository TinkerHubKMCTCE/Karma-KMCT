import classes from "./Alumni.module.css";
import Form from "./Form/Form";

import { useState } from "react";

const Ambassadar = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className={classes.ambaSection}>
      <div className={classes.ambassadar}>
        <div className={classes.headingBox}>
          <h3 className={classes.heading}>Karma 22 Alumni</h3>
          <p className={classes.para}>
            "We maybe far apart but the bond between a student and alma mater
            always remains strong." <br></br>
            <br></br>Let's join together and celebrate a day with all the
            familiar faces you must have missed for long!!!<br></br> _𝚁𝚎𝚗𝚎𝚠 𝚢𝚘𝚞𝚛
            𝚏𝚛𝚒𝚎𝚗𝚍𝚜𝚑𝚒𝚙𝚜 <br></br>_𝚁𝚎𝚌𝚘𝚞𝚗𝚝 𝚖𝚎𝚖𝚘𝚛𝚒𝚎𝚜 <br></br>_𝙴𝚗𝚕𝚒𝚟𝚎𝚗 𝚝𝚑𝚎
            𝚗𝚘𝚜𝚝𝚊𝚕𝚐𝚒𝚊 <br></br>_𝚂𝚑𝚊𝚛𝚎 𝚎𝚡𝚙𝚎𝚛𝚒𝚎𝚗𝚌𝚎𝚜 _𝚝𝚘𝚐𝚎𝚝𝚑𝚎𝚛
          </p>

          <button className={classes.btn} onClick={() => setOpen(!open)}>
            Register Now !
          </button>
        </div>
        <div className={classes.imgBox}>
          <img
            className={classes.img}
            src="assets/alumni.png"
            alt="Ambassador"
          />
        </div>
      </div>

      {open && <Form open={open} onClick={() => setOpen(!open)} />}
    </section>
  );
};

export default Ambassadar;
