import { Link } from "react-router-dom";
import classes from "./Technical.module.css"

const Technical = () => {
    return (
        <div className={classes.technical}>
        <div className={classes.card}>
            <div className={classes.imgBox}>
                <img className={classes.img} src="/assets/technical/technical.jpg" alt="technical event" />
            </div>
            <div className={classes.textBox}>
            <h3 className={classes.heading}>Lorem Ipsum</h3>
            <Link className={classes.btn} to="details">View More</Link>
            </div>
        </div>

        <div className={classes.card}>
            <div className={classes.imgBox}>
                <img className={classes.img} src="/assets/technical/technical.jpg" alt="technical event" />
            </div>
            <div className={classes.textBox}>
            <h3 className={classes.heading}>Lorem Ipsum</h3>
            <Link className={classes.btn} to="details">View More</Link>
            </div>
        </div>

        <div className={classes.card}>
            <div className={classes.imgBox}>
                <img className={classes.img} src="/assets/technical/technical.jpg" alt="technical event" />
            </div>
            <div className={classes.textBox}>
            <h3 className={classes.heading}>Lorem Ipsum</h3>
            <Link className={classes.btn} to="details">View More</Link>
            </div>
        </div>

        <div className={classes.card}>
            <div className={classes.imgBox}>
                <img className={classes.img} src="/assets/technical/technical.jpg" alt="technical event" />
            </div>
            <div className={classes.textBox}>
            <h3 className={classes.heading}>Lorem Ipsum</h3>
            <Link className={classes.btn} to="details">View More</Link>
            </div>
        </div>

        <div className={classes.card}>
            <div className={classes.imgBox}>
                <img className={classes.img} src="/assets/technical/technical.jpg" alt="technical event" />
            </div>
            <div className={classes.textBox}>
            <h3 className={classes.heading}>Lorem Ipsum</h3>
            <Link className={classes.btn} to="details">View More</Link>
            </div>
        </div>

        <div className={classes.card}>
            <div className={classes.imgBox}>
                <img className={classes.img} src="/assets/technical/technical.jpg" alt="technical event" />
            </div>
            <div className={classes.textBox}>
            <h3 className={classes.heading}>Lorem Ipsum</h3>
            <Link className={classes.btn} to="details">View More</Link>
            </div>
        </div>

        <div className={classes.card}>
            <div className={classes.imgBox}>
                <img className={classes.img} src="/assets/technical/technical.jpg" alt="technical event" />
            </div>
            <div className={classes.textBox}>
            <h3 className={classes.heading}>Lorem Ipsum</h3>
            <Link className={classes.btn} to="details">View More</Link>
            </div>
        </div>

        <div className={classes.card}>
            <div className={classes.imgBox}>
                <img className={classes.img} src="/assets/technical/technical.jpg" alt="technical event" />
            </div>
            <div className={classes.textBox}>
            <h3 className={classes.heading}>Lorem Ipsum</h3>
            <Link className={classes.btn} to="details">View More</Link>
            </div>
        </div>
    </div>
    )
}

export default Technical;