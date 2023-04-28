import { useEffect, useRef, useState } from "react";
import classes from "./Hero.module.css";
import { Link } from "react-router-dom";
import PrimayBtn from "../Button/Button";

const Hero = () => {
  const [countDays, setDays] = useState(false);
  const [countHours, setHours] = useState(false);
  const [countMinutes, setMinutes] = useState(false);
  const [countSeconds, setSeconds] = useState(false);

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date("April 28 2023 18:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance / 1000 / 60) % 60);
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        //
        clearInterval(interval);
      } else {
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <section id="home" className={classes.hero}>
      <div className={classes.herobox}>
        <div className={classes.headerbox}>
          <h1 className={classes.heading}>Karma 23</h1>
          <h4 className={classes.caption}>What goes around comes around</h4>
          <p className={classes.date}>APRIL 28-30, 2023</p>
          <Link
            className={classes.anchorBtn}
            target="_blank"
            rel="noopener noreferrer"
            to="/tickets"
          >
            <PrimayBtn text="Tickets on sale now !" margin="0 0 3rem 0" />
          </Link>
        </div>

        <div className={classes.countdownbox}>
          <div className={classes.countdown}>
            //<p>{countDays}</p>
            <p>00</p>
            <p>
              <small>Days</small>
            </p>
          </div>

          <span className={classes.column}>:</span>

          <div className={classes.countdown}>
            //<p>{countHours}</p>
            <p>00</p>
            <p>Hours</p>
          </div>

          <span className={classes.column}>:</span>

          <div className={classes.countdown}>
            //<p>{countMinutes}</p>
            <p>00</p>
            <p>Min</p>
          </div>

          <span className={classes.column}>:</span>
          <div className={classes.countdown}>
            //<p>{countSeconds}</p>
            <p>00</p>
            <p>Sec</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
