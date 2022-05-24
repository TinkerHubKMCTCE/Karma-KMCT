import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Background from "../../UI/Background";
import classes from "./Tickets.module.css";

const Tickets = () => {
    const color1Prim = "#444444";
    const color1Sec = "#020202";
    const Bg1 = "/assets/Tickets/Vector1.svg";

    const color2Prim = "#2B65B2";
    const color2Sec = "#2945A2";
    const Bg2 = "/assets/Tickets/Vector2.svg";

    const color3Prim = "#36256A";
    const color3Sec = "#562B83";
    const Bg3 = "/assets/Tickets/Vector3.svg";

    return (
        <section className={classes.section}>
            <Background className={classes.bg}>
                <div className={classes.headingBox}>
                    <h2 className={classes.heading}>Grab your Tickets now</h2>
                </div>
                <div className={classes.cards}>
                    <div
                        className={classes.card}
                        style={{
                            background: `url(${Bg2}), linear-gradient(${color2Prim}, ${color2Sec})`,
                        }}
                    >
                        <div className={classes.cardSection1}>
                            <p className={classes.h1}>Day 2</p>
                            <h3 className={classes.h2}>Musical Night</h3>
                        </div>
                        <div className={classes.details}>
                            <p className={classes.detailList}>
                                <FontAwesomeIcon icon={faCheck} /> <b>PAGLI</b> - Featuring
                                SACHIN WARRIER
                            </p>
                            <p className={classes.detailList}>
                                <FontAwesomeIcon icon={faCheck} /> Participation in Games
                            </p>
                            <p className={classes.detailList}>
                                <FontAwesomeIcon icon={faCheck} /> Entry to Inter-College
                                Cultural Events
                            </p>
                            <p className={classes.detailList}>
                                <FontAwesomeIcon icon={faCheck} /> Workshops and
                                Mentoring 
                            </p>
                            <p className={classes.detailList}>
                                <FontAwesomeIcon icon={faCheck} /> Entry to Expo Corner
                            </p>
                            <p className={classes.conditions}>
                                 * Conditions apply
                            </p>
                        </div>

                        <a
                            href="https://rzp.io/l/Karma-Day2"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className={classes.price}>
                                <button className={classes.btn}>₹300</button>
                            </div>
                        </a>
                    </div>

                    <div
                        className={classes.card}
                        style={{
                            background: `url(${Bg1}), linear-gradient(${color1Prim}, ${color1Sec})`,
                        }}
                    >
                        <div className={classes.cardSection1}>
                            <p className={classes.h1}>Day 3</p>
                            <h3 className={classes.h2}>Pro-show</h3>
                        </div>
                        <div className={classes.details}>
                            <p className={classes.detailList}>
                                <FontAwesomeIcon icon={faCheck} /> Presenting{" "}
                                <b>DJ MARI FERRARI</b>
                            </p>
                            <p className={classes.detailList}>
                                <FontAwesomeIcon icon={faCheck} /> Featuring - <b>DJ TREMENT</b>
                            </p>
                            <p className={classes.detailList}>
                                <FontAwesomeIcon icon={faCheck} /> Featuring -{" "}
                                <b>DJ SAMURAIZZ</b>
                            </p>
                            <p className={classes.detailList}>
                                <FontAwesomeIcon icon={faCheck} /> Entry to Inclusive Hackathons
                            </p>
                            <p className={classes.detailList}>
                                <FontAwesomeIcon icon={faCheck} /> Entry to Expo Corner
                            </p>
                            <p className={classes.conditions}>
                                * Conditions apply
                            </p>
                        </div>

                        <a
                            href="https://rzp.io/l/Karma-Day3"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className={classes.price}>
                                <button className={classes.btn}>₹400</button>
                            </div>
                        </a>
                    </div>

                    <div
                        className={classes.card}
                        style={{
                            background: `url(${Bg3}), linear-gradient(${color3Prim}, ${color3Sec})`,
                        }}
                    >
                        <div className={classes.cardSection1}>
                            <p className={classes.h1}>Day 2 & 3</p>
                            <h3 className={classes.h2}>Combo</h3>
                        </div>
                        <div className={classes.details}>
                            <p className={classes.detailList}>
                                <FontAwesomeIcon icon={faCheck} /> Access to <b>Musical Night</b> & <b>Pro-show</b>
                            </p>
                            <p className={classes.detailList}>
                                <FontAwesomeIcon icon={faCheck} /> Inter College Cultural Events
                            </p>
                            <p className={classes.detailList}>
                                <FontAwesomeIcon icon={faCheck} /> Hackathons
                            </p>
                            <p className={classes.detailList}>
                                <FontAwesomeIcon icon={faCheck} /> Expo Corner
                            </p>
                            <p className={classes.detailList}>
                                <FontAwesomeIcon icon={faCheck} /> Exclusive mentor Talkshows
                            </p>
                            <p className={classes.conditions}>
                                * Conditions apply
                            </p>
                        </div>

                        <a
                            href="https://rzp.io/l/Karma-Combo"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className={classes.price}>
                                <button className={classes.btn}>₹600</button>
                            </div>
                        </a>
                    </div>
                </div>
            </Background>
        </section>
    );
};
export default Tickets;
