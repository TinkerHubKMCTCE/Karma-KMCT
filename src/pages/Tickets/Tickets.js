import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
// import Background from "../../UI/Background";
import classes from "./Tickets.module.css";
import PrimaryBtn from "../../components/Button/Button";

const Tickets = () => {
  const color1Prim = "#342";
  const color1Sec = "#000";
  const Bg1 = "/assets/Tickets/Vector2.svg";

  const color2Prim = "#26004c";
  const color2Sec = "#000";
  const Bg2 = "/assets/Tickets/Vector2.svg";

  const color3Prim = "#8e0e00";
  const color3Sec = "#000";
  const Bg3 = "/assets/Tickets/Vector1.svg";

  return (
    <section className={classes.section}>
      {/* <Background className={classes.bg}> */}
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
              <FontAwesomeIcon icon={faCheck} /> <b>Sithara Krishnakumar</b>
            </p>
            <p className={classes.detailList}>
              <FontAwesomeIcon icon={faCheck} /> Participation in Games
            </p>
            <p className={classes.detailList}>
              <FontAwesomeIcon icon={faCheck} /> Entry to Inter-College Cultural
              Events
            </p>
            <p className={classes.detailList}>
              <FontAwesomeIcon icon={faCheck} /> Entry to Expo Corner
            </p>
            <p className={classes.conditions}>* Conditions apply</p>
          </div>

          <a
            href="https://api.whatsapp.com/send/?phone=%2B919895770399&text=Hi, Can+I+get+an+entry+ticket+for+KARMA23+-+Day+2%3F"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={classes.price}>
              <PrimaryBtn text="₹399" pad="1rem 4rem"/>
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
              <FontAwesomeIcon icon={faCheck} /> Presenting <b>DJ OLLY ESSE</b>
            </p>
            <p className={classes.detailList}>
              <FontAwesomeIcon icon={faCheck} /> Featuring - <b>DJ SAMURAIZZ</b>
            </p>
            <p className={classes.detailList}>
              <FontAwesomeIcon icon={faCheck} /> Entry to Inclusive Hackathons
            </p>
            <p className={classes.detailList}>
              <FontAwesomeIcon icon={faCheck} /> Entry to Expo Corner
            </p>
            <p className={classes.conditions}>* Conditions apply</p>
          </div>

          <a
            href="https://api.whatsapp.com/send/?phone=%2B919895770399&text=Hi, Can+I+get+an+entry+ticket+for+KARMA23+-+Day+3%3F"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={classes.price}>
              <PrimaryBtn text="₹499" pad="1rem 4rem"/>
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
              <FontAwesomeIcon icon={faCheck} /> Access to <b>Musical Night</b>{" "}
              & <b>Pro-show</b>
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
            <p className={classes.conditions}>* Conditions apply</p>
          </div>

          <a
            href="https://api.whatsapp.com/send/?phone=%2B919895770399&text=Hi, Can+I+get+a+combo+entry+ticket+for+KARMA23+-+Day+2+and+3%3F"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={classes.price}>
              <PrimaryBtn text="₹799" pad="1rem 4rem"/>
            </div>
          </a>
        </div>
      </div>
      {/* </Background> */}
    </section>
  );
};
export default Tickets;
