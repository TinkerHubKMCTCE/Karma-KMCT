import classes from "./Cultural.module.css";
import CulturalLists from "../CulturalDetail/CulturalLists";
import EventCard from "../../components/EventCard/EventCard";
import { useEffect } from "react";

const Cultural = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className={classes.cultural}>
      {CulturalLists.map((list) => {
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

export default Cultural;
