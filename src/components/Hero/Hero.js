import classes from "./Hero.module.css"

const Hero = () => {
    return (
        <section className={classes.hero}>
            <div className={classes.herobox}>
                <div className={classes.headerbox}>
                    <h1 className={classes.heading}>KARMA 2022</h1>
                    <h4 className={classes.caption}>What goes around comes around</h4>
                    <p className={classes.date}>MAY 21-23, 2022</p>
                </div>

                <div className={classes.countdownbox}>
                    <div className={classes.countdown}>
                    <p>12</p>
                    <p><small>days</small></p>
                    </div>

                    <span className={classes.column}>:</span>

                    <div className={classes.countdown}>
                    <p>17</p>
                    <p>hours</p>
                    </div>

                        <span className={classes.column}>:</span>

                    <div className={classes.countdown}>
                    <p>40</p>
                    <p>min</p>
                    </div>

                            <span className={classes.column}>:</span>
                    <div className={classes.countdown}>
                    <p>59</p>
                    <p>sec</p>
                    </div>

                   
                </div>
            </div>
        </section>
    )
}

export default Hero;