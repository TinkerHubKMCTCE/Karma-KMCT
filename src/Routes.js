import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import React, { Fragment } from "react";
import App from "./App";
import Culturals from "./components/Culturals/Culturals";
import Desafio from "./components/Culturals/Desafio/Desafio";
import VogueFiesta from "./components/Culturals/Vogue Fiesta/VogueFiesta";
import Aghaidh from "./components/Culturals/Aghaidh/Aghaidh";

const MyRoutes = () => {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/culturals" element={<Culturals />} />
          <Route path="/desafio" element={<Desafio />} />
          <Route path="/voguefiesta" element={<VogueFiesta />} />
          <Route path="/aghaidh" element={<Aghaidh />} />
        </Routes>
      </Router>
    </Fragment>
  );
};

export default MyRoutes;
