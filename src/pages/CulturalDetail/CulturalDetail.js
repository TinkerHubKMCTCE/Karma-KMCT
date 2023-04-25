import { useParams } from "react-router-dom";
import classes from "./EventDetail.module.css";
import Background from "../../UI/Background";
import CulturalLists from "./CulturalLists";
import { useEffect } from "react";
import PrimaryBtn from "../../components/Button/Button";

const CulturalDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const params = useParams();
  console.log(params.id);

  const culturalDetail = CulturalLists.filter(
    (event) => params.id === event.name
  );

  // const filteredDetail = CulturalLists.filter((event) => params.id === event.name)
  // console.log(filteredDetail[0].name);

  return (
    <section className={classes.ambaSection}>
      <Background className={classes.ambassadar}>
        <div className={classes.tech}>
          <div className={classes.imgBox}>
            <img
              className={classes.img}
              src={culturalDetail[0].imgSrc}
              alt="Desafio"
            />
          </div>
          <div className={classes.scrollBox}>
            <div className={classes.headingBox}>
              <h3 className={classes.heading}>{culturalDetail[0].heading}</h3>
              <p className={classes.para}>{culturalDetail[0].para}</p>
              <h3 className={classes.heading}> Rules & Guidelines</h3>
              <p className={classes.para}>{culturalDetail[0].rule1}</p>
              <p className={classes.para}> {culturalDetail[0].rule2}</p>
              <p className={classes.para}>{culturalDetail[0].rule3}</p>
              <p className={classes.para}>{culturalDetail[0].rule4}</p>
              <p className={classes.para}>{culturalDetail[0].rule5}</p>

              {/* <h3 className={classes.heading}>Judging Criteria</h3>

          {culturalDetail[0].criteria.map((crit) => {
            return <p className={crit}></p>;
          })} */}

              <p className={classes.fees}>
                Registration fees: ₹
                <span className={classes.amount}>
                  {culturalDetail[0].regFee}
                </span>
              </p>

              <p className={classes.cont}>
                Contact - {culturalDetail[0].contact1}
              </p>
              <p className={classes.cont}>
                Contact - {culturalDetail[0].contact2}
              </p>

              <a
                href={culturalDetail[0].paymentLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <PrimaryBtn text="Register" />
              </a>
            </div>
          </div>
        </div>
      </Background>
    </section>
  );
};

export default CulturalDetail;
