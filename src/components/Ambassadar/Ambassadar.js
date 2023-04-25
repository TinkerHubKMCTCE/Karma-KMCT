import { motion } from "framer-motion";

import classes from "./Ambassadar.module.css";
// import Mobile from "./Mobile.svg";
import Form from "./Form/Form";
import PrimaryBtn from "../Button/Button";

import { useState } from "react";
import Background from "../../UI/Background";

const Ambassadar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.section
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      id="ambassador"
      className={classes.ambaSection}
    >
      <Background className={classes.ambassadar}>
        <div className={classes.headingBox}>
          <h3 className={classes.heading}>Karma 22 Ambassadar Program</h3>
          <p className={classes.para}>
            Leaders are born, if one have a strong spark in their heart. Here
            KARMA' 22 brings an opportunity to represent the college through "
            CALL FOR CAMPUS AMBASSADOR ". Initiatives took by some are followed
            by others. Make it happen without wasting your time !
          </p>

          <PrimaryBtn text="Register Now !" onClick={() => setOpen(!open)} />
        </div>
        <div className={classes.imgBox}>
          <img
            className={classes.img}
            src="assets/Ambassador/Mobile.svg"
            alt="Ambassador"
          />
        </div>
      </Background>

      {open && <Form open={open} onClick={() => setOpen(!open)} />}
    </motion.section>
  );
};

export default Ambassadar;
