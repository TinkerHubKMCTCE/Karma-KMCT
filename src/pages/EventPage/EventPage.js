import { Link, Outlet } from "react-router-dom";
import Background from "../../UI/Background";
import classes from "./EventPage.module.css"

const EventPage = () => {
    return (
        <section className={classes.eventPage}>
            <Background>
                <div className={classes.types}>
                    <Link to="cultural" className={classes.btn}>Cultural</Link>
                    <Link to="technical" className={classes.btn}>Technical</Link>
                </div>

                <Outlet />
            </Background>
        </section>
    )
}

export default EventPage;