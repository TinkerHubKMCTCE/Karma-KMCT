import { useParams } from "react-router-dom";
import classes from "./TechnicalDetail.module.css";
import Background from "../../UI/Background";
import TechnicalLists from "./TechnicalLists";

const TechnicalDetail = () => {
  const params = useParams();
  console.log(params.id);

  const technical = TechnicalLists.filter((event) => params.id === event.name);
  console.log(technical);

  return (
    <section className={classes.ambaSection}>
      <Background className={classes.ambassadar}>
        <div className={classes.imgBox}>
          <img
            className={classes.img}
            src={technical[0].imgSrc}
            alt="Desafio"
          />
        </div>
<<<<<<< HEAD
                    <div className={classes.headingBox}>
                        <h3 className={classes.heading}>{technical[0].heading}</h3>
                        <p className={classes.para}>
                       {technical[0].Headingpara}
                        </p>
                        <h3 className={classes.heading}>Certification</h3>
                        <p className={classes.para}>{technical[0].certiPara}</p>
                        <h3 className={classes.heading}>Learning Outcomes</h3>

                        {technical[0].rules.map((map) => {
                            return <p className={classes.para}>{map}</p>
                        })}

                        <p className={classes.fees}>Registration fees: ₹<span className={classes.amount}>{technical[0].regFee}</span></p>
                          <p className={classes.cont}>Contact : {technical[0].contact1}</p>
                          <p className={classes.cont}>Contact : {technical[0].contact2}</p>

                        <a href={technical[0].paymentLink}>
                        <button className={classes.btn}>Register Now !</button>
                        </a>
                    </div>
                </Background>
              </section>
          );
}
=======
        <div className={classes.headingBox}>
          <h3 className={classes.heading}>{technical[0].heading}</h3>
          <p className={classes.para}>{technical[0].headingPara}</p>
          <h3 className={classes.heading}>Certification</h3>
          <p className={classes.para}>{technical[0].certiPara}</p>
          <h3 className={classes.heading}>Learning Outcomes</h3>

          {technical[0].rules.map((map) => {
            return <p className={classes.para}>{map}</p>;
          })}
          <a
            href={technical[0].paymentLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className={classes.btn}>Register Now !</button>
          </a>
        </div>
      </Background>
    </section>
  );
};
>>>>>>> bfbf80ba4053286a1f785f8427471cd0345451b3

export default TechnicalDetail;
