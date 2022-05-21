import { useParams } from "react-router-dom";
import classes from "./TalkDetail.module.css";
import Background from "../../UI/Background";
import TalkLists from "./TalkLists";
import { useEffect } from "react";

const TalkDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const params = useParams();
  console.log(params.id);

  const talk = TalkLists.filter((event) => params.id === event.name);

  return (
    <section className={classes.ambaSection}>
      <Background className={classes.ambassadar}>
        <div className={classes.tech}>
          <div className={classes.imgBox}>
            <img className={classes.img} src={talk[0].imgSrc} alt="Hi Kmct" />
          </div>

          <div className={classes.ScrollBox}>
            <div className={classes.headingBox}>
              <h3 className={classes.heading}>{talk[0].heading}</h3>
              <p className={classes.para}>{talk[0].para}</p>
              {/* <h3 className={classes.heading}>Game Rules</h3> */}

              {talk[0].rules.map((map) => {
                return <p className={classes.para}>{map}</p>;
              })}

              <p className={classes.fees}>
                Registration fees: ₹
                <span className={classes.amount}>{talk[0].regFee}</span>
              </p>

              <a
                href={talk[0].paymentLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className={classes.btn}>Register Now!</button>
              </a>
            </div>
          </div>
        </div>
      </Background>
    </section>
  );
};

export default TalkDetail;
