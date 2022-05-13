import { Fragment } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Background from "../../UI/Background";
import classes from "./EventPage.module.css";


const EventPage = () => {
    return (
        <section className={classes.eventPage}>
        <Header />
            <Background>
                <div className={classes.types}>
                    <NavLink to="cultural" activeClassName={classes.active} className={classes.btn}>Cultural</NavLink>
                    <NavLink to="technical" activeClassName={classes.active} className={classes.btn}>Technical</NavLink>
                    <NavLink to="hackathon" activeClassName={classes.active} className={classes.btn}>Hackathon</NavLink>
                </div>

                <Outlet />
            </Background>
        </section>
    )
}

export default EventPage;