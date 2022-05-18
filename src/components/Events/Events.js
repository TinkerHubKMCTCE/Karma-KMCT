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
          The programme includes a variety of activities, including technical, non-technical, hackathons, and project contests. The event is significant in the fields of creativity motivation and technological innovation skills among the new age laureates.
          </p>

          <Link
            to="/events"
            className={classes.btn} 
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore our events !
          </Link>
        </div>
      </Background>
    </section>
  );
};

export default Events;
