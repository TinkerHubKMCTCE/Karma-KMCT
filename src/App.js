import { React, Fragment, useState, useEffect } from "react";

import PreLoader from "./pages/PreLoader/PreLoader";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Events from "./components/Events/Events";
import Gallery from "./components/Gallery/Gallery";
// import Ambassadar from "./components/Ambassadar/Ambassadar";
// import Alumni from "./components/Alumni/Alumni";
import ContactUs from "./components/ContactUs/ContactUs";
import Overlay from "./components/Overlay/Overlay";

function App() {
  const [preloader, setPreloader] = useState(false);
  const [overlay, setOverlay] = useState(true);

  useEffect(() => {
    setPreloader(true);
  }, []);

  return (
    <Fragment>
      {preloader && <PreLoader />}
      {overlay && <Overlay onClick={() => setOverlay(false)} />}
      <Hero />
      <About />
      <Events />
      <Gallery />
      {/* <Ambassadar /> */}
      {/* <Alumni /> */}
      <ContactUs />
    </Fragment>
  );
}

export default App;
