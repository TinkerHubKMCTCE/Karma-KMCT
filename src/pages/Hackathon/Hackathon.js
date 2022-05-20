import classes from "./Hackathon.module.css";
import HackathonLists from "../HackathonDetail/hackathonLists";
import EventCard from "../../components/EventCard/EventCard";
import { useEffect } from "react";

const Hackathon = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className={classes.hackathon}>
    {/* <h3 className={classes.soon}>Details will be added soon.....</h3> */}
      {HackathonLists.map((list) => {
        return (
          <EventCard
          key={list.id}
          imgSrc={list.imgSrc}
          heading={list.heading}
          redirectLink={list.redirectLink}
           />
        )
      })}
    </div>
  );
};

export default Hackathon;
