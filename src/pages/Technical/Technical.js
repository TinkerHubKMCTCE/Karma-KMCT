import classes from "./Technical.module.css";
import TechnicalLists from "../TechnicalDetail/TechnicalLists";
import EventCard from "../../components/EventCard/EventCard";
import { useEffect } from "react";

const Technical = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className={classes.technical}>
      {TechnicalLists.map((list) => {
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

export default Technical;
