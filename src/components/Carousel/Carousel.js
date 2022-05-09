import classes from "./Carousel.module.css";

import Carousel1 from "./Carousel1/Carousel1"
import Carousel2 from "./Carousel2/Carousel2"

const Carousel = () => {
  return (
    <section className={classes.carousel}>
      <div className="">
        

        <Carousel1 />

       <Carousel2 />
      </div>
    </section>
  );
};

export default Carousel;
