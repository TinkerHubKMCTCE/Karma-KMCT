import classes from "./Carousel1.module.css";
import { Fragment } from "react";
import { Carousel } from "react-responsive-carousel";

const Carousel1 = () => {
  return (
    <Fragment>
      <div className={classes.cardBox}>
        <div className={classes.headingBox}>
          <h2 className={classes.heading}>Highlights</h2>
        </div>

        <div style={{ paddingTop: "3rem" }}></div>

        <Carousel
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={3000}
          infiniteLoop={true}
        >
          <div className={classes.box}>
            <div className={classes.boxContent}>
              <img
                className={classes.boxImage}
                src="https://drive.google.com/uc?export=view&id=148VPqpPUxQFfyxnnHiKyp8SHUClNyIrP"
                width={600}
                height={325}
                alt="Will preview here"
              />
              <h3 className={classes.boxHeading}>KARMA'22</h3>
              <span className={classes.span}>Launch</span>
            </div>
            <div className={classes.boxContent}>
              <img
                className={classes.boxImage}
                src="https://drive.google.com/uc?export=view&id=1UJApt2VyVRzvBLbuONjnNrLOCqisvAjv"
                width={600}
                height={325}
                alt="Will preview here"
              />
              <h3 className={classes.boxHeading}>KARMA'22</h3>
              <span className={classes.span}>Launch</span>
            </div>

            <div className={classes.boxContent}>
              <img
                className={classes.boxImage}
                src="https://drive.google.com/uc?export=view&id=144CD1nnClf7YSm0-_vEsQjXYtt5JgZvz"
                width={600}
                height={325}
                alt="Will preview here"
              />
              <h3 className={classes.boxHeading}>KARMA'22</h3>
              <span className={classes.span}>Launch</span>
            </div>
          </div>

          <div className={classes.box}>
            <div className={classes.boxContent}>
              <img
                className={classes.boxImage}
                src="https://drive.google.com/uc?export=view&id=16DyqZeqohYqSdvQtDDzQ-nXlAaRJgyTX"
                width={600}
                height={325}
                alt="Will preview here"
              />
              <h3 className={classes.boxHeading}>KARMA'22</h3>
              <span className={classes.span}>Launch</span>
            </div>
            <div className={classes.boxContent}>
              <img
                className={classes.boxImage}
                src="https://drive.google.com/uc?export=view&id=1TtAl2ogulmCeNnp3Kv_83YfvHv-QgsgD"
                width={600}
                height={325}
                alt="Will preview here"
              />
              <h3 className={classes.boxHeading}>KARMA'22</h3>
              <span className={classes.span}>Launch</span>
            </div>

            <div className={classes.boxContent}>
              <img
                className={classes.boxImage}
                src="https://drive.google.com/uc?export=view&id=1RLrWBYH128vr8fiYCaOk1Ddu1A3skCXb"
                width={600}
                height={325}
                alt="Will preview here"
              />
              <h3 className={classes.boxHeading}>KARMA'22</h3>
              <span className={classes.span}>Launch</span>
            </div>
          </div>

          <div className={classes.box}>
            <div className={classes.boxContent}>
              <img
                className={classes.boxImage}
                src="https://drive.google.com/uc?export=view&id=1QgJZv7E5IGEXz8mEIHwdUSKi4F91CVu6"
                width={600}
                height={325}
                alt="Will preview here"
              />
              <h3 className={classes.boxHeading}>KARMA'22</h3>
              <span className={classes.span}>Launch</span>
            </div>
            <div className={classes.boxContent}>
              <img
                className={classes.boxImage}
                src="https://drive.google.com/uc?export=view&id=1JLJwshC5dq-RNsww57hMNJ_b_HZpfccw"
                width={600}
                height={325}
                alt="Will preview here"
              />
              <h3 className={classes.boxHeading}>KARMA'22</h3>
              <span className={classes.span}>Launch</span>
            </div>

            <div className={classes.boxContent}>
              <img
                className={classes.boxImage}
                src="https://drive.google.com/uc?export=view&id=1f5BNUnGxik9GDd2qJOx2bbbvjoZBb9Sb"
                width={600}
                height={325}
                alt="Will preview here"
              />
              <h3 className={classes.boxHeading}>KARMA'22</h3>
              <span className={classes.span}>Launch</span>
            </div>
          </div>

          <div className={classes.box}>
            <div className={classes.boxContent}>
              <img
                className={classes.boxImage}
                src="https://drive.google.com/uc?export=view&id=1XIspGbgfeKJmPl5NbYCVSbS4TMRhBVmA"
                width={600}
                height={325}
                alt="Will preview here"
              />
              <h3 className={classes.boxHeading}>KARMA'22</h3>
              <span className={classes.span}>Launch</span>
            </div>
            <div className={classes.boxContent}>
              <img
                className={classes.boxImage}
                src="https://drive.google.com/uc?export=view&id=12pVyF_9hmavzmlN5vzFNQstnTIEUj_sc"
                width={600}
                height={325}
                alt="Will preview here"
              />
              <h3 className={classes.boxHeading}>KARMA'22</h3>
              <span className={classes.span}>Launch</span>
            </div>

            <div className={classes.boxContent}>
              <img
                className={classes.boxImage}
                src="https://drive.google.com/uc?export=view&id=1u45gRQg_fS9k-JujeEgehvywZ5hBRNW4"
                width={600}
                height={325}
                alt="Will preview here"
              />
              <h3 className={classes.boxHeading}>KARMA'22</h3>
              <span className={classes.span}>Launch</span>
            </div>
          </div>
        </Carousel>
      </div>
    </Fragment>
  );
};

export default Carousel1;
