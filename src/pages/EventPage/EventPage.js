import { NavLink, Outlet } from "react-router-dom";
import Background from "../../UI/Background";
import classes from "./EventPage.module.css";

const EventPage = () => {
    return (
        <section className={classes.eventPage}>
            <Background className={classes.bg}>

                <div className={classes.tabs}>
                    <div className={classes.tabList}>
                        <div className={`${classes.tabHead}`}><NavLink to="cultural" className={({ isActive }) => (isActive ? `${classes.active} ${classes.links}` : `${classes.links}`)}>Cultural</NavLink></div>
                        <div className={`${classes.tabHead}`}><NavLink to="technical" className={({ isActive }) => (isActive ? `${classes.active} ${classes.links}` : `${classes.links}`)}>Workshops</NavLink></div>
                        <div className={`${classes.tabHead}`}><NavLink to="hackathon" className={({ isActive }) => (isActive ? `${classes.active} ${classes.links}` : `${classes.links}`)}>Hackathon</NavLink></div>
                    </div>
                </div>
        <Outlet />
      </Background>
    </section>
  );
};

export default EventPage;
