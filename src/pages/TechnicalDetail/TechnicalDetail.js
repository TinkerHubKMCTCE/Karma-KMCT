import { useParams } from "react-router-dom";
import classes from "./TechnicalDetail.module.css"
import Background from "../../UI/Background";
import TechnicalLists from "./TechnicalLists"

const TechnicalDetail = () => {

    const params = useParams();
    console.log(params.id);

    const technical = TechnicalLists.filter((event) => params.id === event.name)
    console.log(technical[0].rules);

    // const filteredDetail = CulturalLists.filter((event) => params.id === event.name)
    // console.log(filteredDetail[0].name);

    return (
              <section className={classes.ambaSection}>
                <Background className={classes.ambassadar}>

                    <div className={classes.imgBox}>
                        <img className={classes.img} src={technical[0].imgSrc} alt="Desafio" />
                    </div>

                    <div className={classes.headingBox}>
                        <h3 className={classes.heading}>{technical[0].heading}</h3>
                        <p className={classes.para}>
                       {technical[0].para}
                        </p>
                        <h3 className={classes.heading}>Certification</h3>
                        <p className={classes.para}>{technical[0].certiPara}</p>
                        <h3 className={classes.heading}>Learning Outcomes</h3>

                        {technical[0].rules.map((map) => {
                            return <p className={classes.para}>{map}</p>
                        })}
                        <a href={technical[0].paymentLink}>
                        <button className={classes.btn}>Register Now !</button>
                        </a>
                    </div>
                </Background>
              </section>
          );
}

export default TechnicalDetail;