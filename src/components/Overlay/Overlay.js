import Backdrop from "../../UI/Backdrop/Backdrop"
import classes from "./Overlay.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"

const Overlay = (props) => {
    return (
        <Backdrop>
            <div className={classes.modal}>
                <div className={classes.imgBox}>
                    <FontAwesomeIcon icon={faXmark} onClick={props.onClick} className={classes.icon} />
                    <img className={classes.poster} src="/assets/Tickets/grabyourtickets.png" alt="Ticket Poster" />
                </div>

            </div>
        </Backdrop>
    )
}

export default Overlay