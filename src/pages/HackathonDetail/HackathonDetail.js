import { useParams } from "react-router-dom";
import classes from "./HackathonDetail.module.css";
import Background from "../../UI/Background";
import hackathonLists from "./hackathonLists";
import { useEffect } from "react";

const HackathonDetail = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  const params = useParams();
  console.log(params.id);

  const hackathon = hackathonLists.filter((event) => params.id === event.name);

  // const filteredDetail = CulturalLists.filter((event) => params.id === event.name)
  // console.log(filteredDetail[0].name);

  return (
    <section className={classes.ambaSection}>
      <Background className={classes.ambassadar}>
        <div className={classes.tech}>
          <div className={classes.imgBox}>
            <img
              className={classes.img}
              src={hackathon[0].imgSrc}
              alt="Desafio"
            />
          </div>

          <div className={classes.ScrollBox}>
              <div className={classes.headingBox}>
                <h3 className={classes.heading}>{hackathon[0].heading}</h3>
                <p className={classes.para}>{hackathon[0].para1}</p>
                <p className={classes.para}>{hackathon[0].para2}</p>
                <p className={classes.para}>{hackathon[0].para3}</p>
                <p className={classes.para}>{hackathon[0].para4}</p>
                <p className={classes.para}>{hackathon[0].para5}</p>
                <p className={classes.para}>{hackathon[0].certiPara}</p>
                <h3 className={classes.heading}>Rules</h3>

                {hackathon[0].rules.map((map) => {
                  return <p className={classes.para}>{map}</p>;
                })}

                <a href={hackathon[0].paymentLink}>
                  <button className={classes.btn}>Register Now !</button>
                </a>
              </div>
          </div>
        </div>
      </Background>
    </section>
  );
};

export default HackathonDetail;
