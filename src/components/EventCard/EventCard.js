import { Link } from "react-router-dom";
import classes from "./EventCard.module.css";

import PrimaryBtn from "../Button/Button";

const EventCard = (props) => {
  return (
    <div className={classes.card}>
      <div className={classes.imgBox}>
        <img className={classes.img} src={props.imgSrc} alt="cultural event" />
      </div>
      <div className={classes.textBox}>
        <h3 className={classes.heading}>{props.heading}</h3>
        <Link to={props.redirectLink}>
          <PrimaryBtn text="View more" />
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
