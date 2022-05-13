import { NavLink, Outlet } from "react-router-dom";
import Background from "../../UI/Background";
import classes from "./EventPage.module.css";


const EventPage = () => {
    return (
        <section className={classes.eventPage}>
            <Background>
                <div className={classes.types}>
                    <NavLink to="cultural" activeClassName={classes.active} className={classes.btn}>Cultural</NavLink>
                    <NavLink to="technical" activeClassName={classes.active} className={classes.btn}>Technical</NavLink>
                </div>

                <Outlet />
            </Background>
        </section>
    )
}

export default EventPage;