import classes from "./Talk.module.css";
import TalkLists from "../TalkDetail/TalkLists";
import EventCard from "../../components/EventCard/EventCard";

const Talk = () => {
  return (
    <div className={classes.talks}>
      {TalkLists.map((list) => {
        return (
          <EventCard
            key={list.id}
            imgSrc={list.imgSrc}
            heading={list.heading}
            redirectLink={list.redirectLink}
          />
        );
      })}
    </div>
  );
};

export default Talk;
