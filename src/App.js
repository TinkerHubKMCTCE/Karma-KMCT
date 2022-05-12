import { Fragment } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Ambassadar from "./components/Ambassadar/Ambassadar";
import Alumni from "./components/Alumni/Alumni"
import Carousel from "./components/Carousel/Carousel";

function App() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <About />
      <Carousel />
      <Ambassadar />
      <Alumni />
      <Footer />
    </Fragment>
  );
}

export default App;
