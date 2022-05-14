import classes from "./Hackathon.module.css";
import HackathonLists from "../HackathonDetail/hackathonLists";
import EventCard from "../../components/EventCard/EventCard";

const Hackathon = () => {
  console.log("HEllo world");
  return (
    <div className={classes.hackathon}>
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
