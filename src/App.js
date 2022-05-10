import { Fragment } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <About />
      {/* <Carousel /> */}
      <Footer />
    </Fragment>
  );
}

export default App;
