import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import React, { Fragment } from "react";
import App from "./App";
import Culturals from "./components/Culturals/Culturals";

const MyRoutes = () => {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/culturals" element={<Culturals />} />
        </Routes>
      </Router>
    </Fragment>
  );
};

export default MyRoutes;
