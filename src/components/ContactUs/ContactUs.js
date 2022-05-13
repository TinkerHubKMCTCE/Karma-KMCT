import classes from "./ContactUs.module.css"

const ContactUs = () => {
    return (
        <section className={classes.contact}>
            <div className={classes.contactBox}>
                <div className={classes.headingBox}>
                    <h2 className={classes.heading}>Contact us</h2>
                </div>
                
                <div className={classes.contentBox}>
                
                    <div className={classes.persons}>
                        <div className={classes.personBox}>
                            <h3 className={classes.personHeading}>Shamsudheen</h3>
                                <div className={classes.details}>
                                    <p>Designation</p>
                                    <a className={classes.anchor} href="tel:+917012824370">+91 7012 824 370</a>
                                </div>
                        </div>

                        <div className={classes.personBox}>
                            <h3 className={classes.personHeading}>Sithara Beegam</h3>
                                <div className={classes.details}>
                                    <p>Designation</p>
                                    <a className={classes.anchor} href="tel:+918592002134">+91 8592 002 134</a>
                                </div>
                        </div>
                    </div>

                    <div className={classes.mapBox}>
                        <iframe className={classes.map} title="Kmct Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1956.153609468383!2d75.95371039076552!3d11.31224067999375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba643af748ee911%3A0x542a35d383bb1999!2sKMCT%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1652027577733!5m2!1sen!2sin" loading="lazy" style={{border: 0}}></iframe>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default ContactUs