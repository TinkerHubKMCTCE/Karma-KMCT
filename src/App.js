import { React ,Fragment } from "react";

import Ambassadar from "./components/Ambassadar/Ambassadar"
import Alumni from "./components/Alumni/Alumni"
import ContactUs from "./components/ContactUs/ContactUs"

const Hero = React.lazy(() => import("./components/Hero/Hero"));
const About = React.lazy(() => import("./components/About/About"));
const Events = React.lazy(() => import("./components/Events/Events"));
const PreLoader = React.lazy(() => import("./pages/PreLoader/PreLoader"));
const Gallery = React.lazy(() => import("./components/Gallery/Gallery"));


function App() {
  return (
    <Fragment>
      <PreLoader />
      <Hero />
      <About />
      <Events />
      <Gallery />
      <Ambassadar />
      <Alumni />
      <ContactUs />
    </Fragment>
  );
}

export default App;
