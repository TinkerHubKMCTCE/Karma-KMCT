import { Link } from "react-router-dom";
import classes from "./Cultural.module.css"

const Cultural = () => {
    return (
        <div className={classes.cultural}>
            <div className={classes.card}>
                <div className={classes.imgBox}>
                    <img className={classes.img} src="/assets/cultural/pic.png" alt="cultural event" />
                </div>
                <div className={classes.textBox}>
                <h3 className={classes.heading}>Desafio - Dance Competition</h3>
                <Link className={classes.btn} to="/events/cultural/desafio">View More</Link>
                </div>
            </div>

            <div className={classes.card}>
                <div className={classes.imgBox}>
                    <img className={classes.img} src="/assets/cultural/pencildrawing.png" alt="cultural event" />
                </div>
                <div className={classes.textBox}>
                <h3 className={classes.heading}>LAPIZ - Pencil Drawing Competition</h3>
                <Link className={classes.btn} to="/events/cultural/pencildrawing">View More</Link>
                </div>
            </div>

            <div className={classes.card}>
                <div className={classes.imgBox}>
                    <img className={classes.img} src="/assets/cultural/fashionshow.png" alt="cultural event" />
                </div>
                <div className={classes.textBox}>
                <h3 className={classes.heading}>Vogue Fiesta - Fashion Show</h3>
                <Link className={classes.btn} to="/events/cultural/fashionshow">View More</Link>
                </div>
            </div>

            <div className={classes.card}>
                <div className={classes.imgBox}>
                    <img className={classes.img} src="/assets/cultural/lightmusic.png" alt="cultural event" />
                </div>
                <div className={classes.textBox}>
                <h3 className={classes.heading}>Light Music</h3>
                <Link className={classes.btn} to="/events/cultural/lightmusic">View More</Link>
                </div>
            </div>

        </div>
    )
}

export default Cultural;