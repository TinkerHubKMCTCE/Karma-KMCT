import classes from "./Tickets.module.css"

const Tickets = () => {
    return (
        <section className={classes.section}>
            <div className={classes.cards}>

                    <div className={classes.card}>
                        <div className={classes.cardSection1}>
                                <p className={classes.h1}>Day 1</p>
                                <h3 className={classes.h2}>Musical Night</h3>
                            </div>
                            <div className={classes.details}>
                               <p className={classes.detailList}>1.Lorem ipsum dolor sit amet.</p> 
                               <p className={classes.detailList}>2.Lorem ipsum dolor sit amet.</p>
                               <p className={classes.detailList}>3.Lorem ipsum dolor sit amet.</p>
                               <p className={classes.detailList}>4.Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div className={classes.price}>
                                <button className={classes.btn}>₹300</button>
                            </div>
            </div>


            <div className={classes.card}>
                        <div className={classes.cardSection1}>
                                <p className={classes.h1}>Day 1</p>
                                <h3 className={classes.h2}>Musical Night</h3>
                            </div>
                            <div className={classes.details}>
                               <p className={classes.detailList}>1.Lorem ipsum dolor sit amet.</p> 
                               <p className={classes.detailList}>2.Lorem ipsum dolor sit amet.</p>
                               <p className={classes.detailList}>3.Lorem ipsum dolor sit amet.</p>
                               <p className={classes.detailList}>4.Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div className={classes.price}>
                                <button className={classes.btn}>₹300</button>
                            </div>
            </div>



            <div className={classes.card}>
                        <div className={classes.cardSection1}>
                                <p className={classes.h1}>Day 1</p>
                                <h3 className={classes.h2}>Musical Night</h3>
                            </div>
                            <div className={classes.details}>
                               <p className={classes.detailList}>1.Lorem ipsum dolor sit amet.</p> 
                               <p className={classes.detailList}>2.Lorem ipsum dolor sit amet.</p>
                               <p className={classes.detailList}>3.Lorem ipsum dolor sit amet.</p>
                               <p className={classes.detailList}>4.Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div className={classes.price}>
                                <button className={classes.btn}>₹300</button>
                            </div>
            </div>

      

            </div>
        </section>
    )
}

export default Tickets;