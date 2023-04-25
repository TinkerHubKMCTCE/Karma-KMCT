import { Link } from "react-router-dom";
import classes from "./Dropdown.module.css";

const Dropdown = (props) => {
  return (
    <ul className={classes.dropdown}>
      <li className={classes.drops}>
        <Link
          to="/events/cultural"
          onClick={props.click}
          className={classes.links}
        >
          Culturals
        </Link>
      </li>
      <li className={classes.drops}>
        <Link
          to="/events/technical"
          onClick={props.click}
          className={classes.links}
        >
          Workshops
        </Link>
      </li>
      <li className={classes.drops}>
        <Link
          to="/events/games"
          onClick={props.click}
          className={classes.links}
        >
          Games
        </Link>
      </li>
      {/* <li className={classes.drops}><Link to="/events/hackathon" onClick={props.click} className={classes.links}>Hackathon</Link></li> */}
      {/* <li className={classes.drops}><Link to="/events/talk" onClick={props.click} className={classes.links}>Expert Talk</Link></li> */}
    </ul>
  );
};

export default Dropdown;
