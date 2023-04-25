import { motion } from "framer-motion";

import classes from "./Alumni.module.css";
import Form from "./Form/Form";
import PrimayBtn from "../Button/Button";

import { useState } from "react";
// import { text } from "@fortawesome/fontawesome-svg-core";

const Ambassadar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.section
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className={classes.ambaSection}
    >
      <div className={classes.ambassadar}>
        <div className={classes.imgBox}>
          <img
            className={classes.img}
            src="assets/Alumni/alumni.png"
            alt="Ambassador"
          />
        </div>
        <div className={classes.headingBox}>
          <h3 className={classes.heading}>Halcyon - Alumni</h3>
          <p className={classes.para}>
            "We maybe far apart but the bond between a student and alma mater
            always remains strong." <br></br>
            <br></br>Let's join together and celebrate a day with all the
            familiar faces you must have missed for long!!!<br></br> _𝚁𝚎𝚗𝚎𝚠 𝚢𝚘𝚞𝚛
            𝚏𝚛𝚒𝚎𝚗𝚍𝚜𝚑𝚒𝚙𝚜 <br></br>_𝚁𝚎𝚌𝚘𝚞𝚗𝚝 𝚖𝚎𝚖𝚘𝚛𝚒𝚎𝚜 <br></br>_𝙴𝚗𝚕𝚒𝚟𝚎𝚗 𝚝𝚑𝚎
            𝚗𝚘𝚜𝚝𝚊𝚕𝚐𝚒𝚊 <br></br>_𝚂𝚑𝚊𝚛𝚎 𝚎𝚡𝚙𝚎𝚛𝚒𝚎𝚗𝚌𝚎𝚜 <br></br>_𝚝𝚘𝚐𝚎𝚝𝚑𝚎𝚛
          </p>

          <PrimayBtn text="Register as Alumni" onClick={() => setOpen(!open)} />
        </div>
      </div>

      {open && <Form open={open} onClick={() => setOpen(!open)} />}
    </motion.section>
  );
};

export default Ambassadar;
