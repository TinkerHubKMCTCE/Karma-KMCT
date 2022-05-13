import { Fragment } from "react";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Events from "./components/Events/Events";
import Ambassadar from "./components/Ambassadar/Ambassadar";
import Alumni from "./components/Alumni/Alumni";
import ContactUs from "./components/ContactUs/ContactUs";

function App() {
  return (
    <Fragment>
      <Hero />
      <About />
      <Events />
      <Ambassadar />
      <Alumni />
      <ContactUs />
    </Fragment>
  );
}

export default App;
