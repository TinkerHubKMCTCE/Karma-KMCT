import classes from "./Form.module.css";
import { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Form = (props) => {
  const [open, setOpen] = useState(false);
  const [fullName, setfullName] = useState("");
  const [college, setCollege] = useState("");
  const [mail, setMail] = useState("");
  const [phoneNo, setNumber] = useState("");

  const nameHandler = (event) => {
    setfullName(event.target.value);
  };
  const collegeHandler = (event) => {
    setCollege(event.target.value);
  };
  const mailHandler = (event) => {
    setMail(event.target.value);
  };
  const numberHandler = (event) => {
    setNumber(event.target.value);
  };

  const sheetSubmit = (event) => {
    event.preventDefault();
    const id = "KRM22CA0" + Math.floor(Math.random() * 100);
    console.log(id);
    console.log(fullName, college, mail, phoneNo);

    fetch("", {
      method: "POST",
      body: JSON.stringify({
        fullName,
        college,
        mail,
        phoneNo,
        id
      }),
      headers: { "Content-Type": "application/json" },
    }).then(
      alert("PROGRAM CLOSED!!")
      
    );
  };

  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={true}
    >
      <div className={classes.backdrop}>
        <div className={classes.bkdHeadingBox}>
          <h3 className={classes.bkdHeading}>Register for Campus Ambassador</h3>
          <div onClick={props.onClick} className={classes.close}>
            <FontAwesomeIcon icon={faXmark} size="3x" />
          </div>
        </div>

        <form onSubmit={sheetSubmit}>
          <div className={classes.inputBox}>
            <input
              placeholder="Full Name"
              type="text"
              className={classes.input}
              onChange={nameHandler}
              value={fullName}
              required
            />
            <input
              placeholder="College"
              type="text"
              className={classes.input}
              onChange={collegeHandler}
              value={college}
              required
            />
            <input
              placeholder="Email"
              type="email"
              className={classes.input}
              onChange={mailHandler}
              value={mail}
              required
            />
            <input
              placeholder="Phone number"
              type="tel"
              className={classes.input}
              onChange={numberHandler}
              value={phoneNo}
              required
            />
          </div>

          <button className={classes.btn1}  onClick={() => setOpen(!open)}>
            Sign Up
          </button>
        </form>
      </div>
    </Backdrop>
  );
};

export default Form;
