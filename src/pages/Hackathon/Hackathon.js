import { Link } from "react-router-dom";
import classes from "./Hackathon.module.css";
import HackathonLists from "../HackathonDetail/hackathonLists";

const Hackathon = () => {
  console.log("HEllo world");
  return (
    <div className={classes.cultural}>
      {HackathonLists.map((list) => {
        return (
          <div className={classes.card}>
            <div className={classes.imgBox}>
              <img
                className={classes.img}
                src={list.imgSrc}
                alt="cultural event"
              />
            </div>
            <div className={classes.textBox}>
              <h3 className={classes.heading}>{list.heading}</h3>
              <Link className={classes.btn} to={list.redirectLink}>
                View More
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Hackathon;
