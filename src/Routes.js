import { Route, Routes, Navigate } from "react-router-dom";

import React, { Fragment } from "react";
import App from "./App";
import EventPage from "./pages/EventPage/EventPage";
import CulturalDetail from "./pages/CulturalDetail/CulturalDetail";
import TechnicalDetail from "./pages/TechnicalDetail/TechnicalDetail";
import HackathonDetail from "./pages/HackathonDetail/HackathonDetail";
import Header from "./components/Header/Header";
import Cultural from "./pages/Cultural/Cultural";
import Technical from "./pages/Technical/Technical";
import Footer from "./components/Footer/Footer";
import Hackathon from "./pages/Hackathon/Hackathon";
import ProjectCompetition from "./pages/ProjectCompetition/ProjectCompetition";


const MyRoutes = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/events/*" element={<EventPage />}>
            <Route path="cultural" element={<Cultural />} />
            <Route path="technical" element={<Technical />} />
            <Route path="hackathon" element={<Hackathon />} />
            <Route
              path="project-competition"
              element={<ProjectCompetition />}
            />
          </Route>
          <Route path="/events" element={<Navigate to="cultural" />} />
          <Route path="/events/cultural/:id" element={<CulturalDetail />} />
          <Route path="/events/technical/:id" element={<TechnicalDetail />} />
          <Route path="/events/hackathon/:id" element={<HackathonDetail />} />
        </Routes>
      </main>
      <Footer />
    </Fragment>
  );
};

export default MyRoutes;
