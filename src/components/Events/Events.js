import classes from "./Events.module.css";
import Background from "../../UI/Background";
import { Link } from "react-router-dom";

const Events = () => {
  return (
    <section className={classes.events}>
      <Background className={classes.eventBox}>
        <div className={classes.imgBox}>
          <img
            className={classes.img}
            src="assets/Ambassador/event.svg"
            alt="Ambassador"
          />
        </div>

        <div className={classes.headingBox}>
          <h3 className={classes.heading}>Karma 22 Events</h3>
          <p className={classes.para}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            consectetur officia recusandae architecto cumque placeat tenetur hic
            unde at esse?
          </p>

          <Link
            to="/events"
            className={classes.btn}
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore our events
          </Link>
        </div>
      </Background>
    </section>
  );
};

export default Events;
