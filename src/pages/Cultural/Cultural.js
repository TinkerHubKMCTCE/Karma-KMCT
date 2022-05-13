import { Link } from "react-router-dom";
import classes from "./Cultural.module.css"

const Cultural = () => {
    return (
        <div className={classes.cultural}>
            <div className={classes.card}>
                <div className={classes.imgBox}>
                    <img className={classes.img} src="/assets/cultural/cultural.jpg" alt="cultural event" />
                </div>
                <div className={classes.textBox}>
                <h3 className={classes.heading}>Lorem Ipsum</h3>
                <Link className={classes.btn} to="details">View More</Link>
                </div>
            </div>

            <div className={classes.card}>
                <div className={classes.imgBox}>
                    <img className={classes.img} src="/assets/cultural/cultural.jpg" alt="cultural event" />
                </div>
                <div className={classes.textBox}>
                <h3 className={classes.heading}>Lorem Ipsum</h3>
                <Link className={classes.btn} to="details">View More</Link>
                </div>
            </div>

            <div className={classes.card}>
                <div className={classes.imgBox}>
                    <img className={classes.img} src="/assets/cultural/cultural.jpg" alt="cultural event" />
                </div>
                <div className={classes.textBox}>
                <h3 className={classes.heading}>Lorem Ipsum</h3>
                <Link className={classes.btn} to="details">View More</Link>
                </div>
            </div>

            <div className={classes.card}>
                <div className={classes.imgBox}>
                    <img className={classes.img} src="/assets/cultural/cultural.jpg" alt="cultural event" />
                </div>
                <div className={classes.textBox}>
                <h3 className={classes.heading}>Lorem Ipsum</h3>
                <Link className={classes.btn} to="details">View More</Link>
                </div>
            </div>

            <div className={classes.card}>
                <div className={classes.imgBox}>
                    <img className={classes.img} src="/assets/cultural/cultural.jpg" alt="cultural event" />
                </div>
                <div className={classes.textBox}>
                <h3 className={classes.heading}>Lorem Ipsum</h3>
                <Link className={classes.btn} to="details">View More</Link>
                </div>
            </div>
        </div>
    )
}

export default Cultural;