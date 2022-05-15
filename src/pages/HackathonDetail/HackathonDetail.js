import { useParams } from "react-router-dom";
import classes from "./HackathonDetail.module.css";
import Background from "../../UI/Background";
import hackathonLists from "./hackathonLists";

const HackathonDetail = () => {
  const params = useParams();
  console.log(params.id);

  const hackathon = hackathonLists.filter((event) => params.id === event.name);

  // const filteredDetail = CulturalLists.filter((event) => params.id === event.name)
  // console.log(filteredDetail[0].name);

  return (
    <section className={classes.ambaSection}>
      <Background className={classes.ambassadar}>
        <div className={classes.imgBox}>
          <img
            className={classes.img}
            src={hackathon[0].imgSrc}
            alt="Desafio"
          />
        </div>

                    <div className={classes.headingBox}>
                        <h3 className={classes.heading}>{hackathon[0].heading}</h3>
                        <p className={classes.para}>
                       {hackathon[0].Headingpara}
                        </p>
                        <h3 className={classes.heading}>Learning Outcomes</h3>

                        {hackathon[0].rules.map((map) => {
                            return <p className={classes.para}>{map}</p>
                        })}

                        <p className={classes.fees}>Registration fees: ₹<span className={classes.amount}>{hackathon[0].regFee}</span></p>
                          <p className={classes.cont}>Contact : {hackathon[0].contact1}</p>
                          <p className={classes.cont}>Contact : {hackathon[0].contact2}</p>
                        
            
                        <a href={hackathon[0].paymentLink}>
                        <button className={classes.btn}>Register Now !</button>
                        </a>
                    </div>
                </Background>
              </section>
          );
}

export default HackathonDetail;
