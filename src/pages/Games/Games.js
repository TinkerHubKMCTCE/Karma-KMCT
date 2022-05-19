import classes from "./Games.module.css";
import GamesLists from "../GamesDetail/GamesLists";
import EventCard from "../../components/EventCard/EventCard";

const Games = () => {
  
  return (
    <div className={classes.games}>
      {GamesLists.map((list) => {
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

export default Games;
