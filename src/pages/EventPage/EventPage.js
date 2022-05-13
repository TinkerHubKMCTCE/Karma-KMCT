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
                    <NavLink to="cultural" activeclassName={classes.active} className={classes.btn}>Cultural</NavLink>
                    <NavLink to="technical" activeclassName={classes.active} className={classes.btn}>Technical</NavLink>
                </div>

                <Outlet />
            </Background>
        </section>
    )
}

export default EventPage;