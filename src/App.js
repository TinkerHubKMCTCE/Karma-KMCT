import { Fragment } from "react";
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero";
import About from "./components/About/About"

function App() {
  return (
    <Fragment>
     <Header />
     <Hero />
     <About />
    </Fragment>
  );
}

export default App;
