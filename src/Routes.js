import { Route, Routes, Navigate } from "react-router-dom";

import React, { Fragment } from "react";
import App from "./App";
import EventPage from "./pages/EventPage/EventPage";
import CulturalDetail from "./pages/CulturalDetail/CulturalDetail";
import TechnicalDetail from "./pages/TechnicalDetail/TechnicalDetail";
import HackathonDetail from "./pages/HackathonDetail/HackathonDetail";
import GamesDetail from "./pages/GamesDetail/GamesDetail";
import Header from "./components/Header/Header";
import Cultural from "./pages/Cultural/Cultural";
import Technical from "./pages/Technical/Technical";
import Footer from "./components/Footer/Footer";
import Hackathon from "./pages/Hackathon/Hackathon";
import { Gallery } from "./pages/Gallery/Gallery";
import Games from "./pages/Games/Games";
import Tickets from "./pages/Tickets/Tickets";
import TalkDetail from "./pages/TalkDetail/TalkDetail";

const MyRoutes = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <Routes>
          <Route path="/home" element={<App />} />
          <Route path="/" element={<Navigate to="home" />} />
          <Route path="/events/*" element={<EventPage />}>
            <Route path="cultural" element={<Cultural />} />
            <Route path="technical" element={<Technical />} />
            <Route path="hackathon" element={<Hackathon />} />
            <Route path="games" element={<Games />} />
          </Route>
          <Route path="/events" element={<Navigate to="cultural" />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/events/cultural/:id" element={<CulturalDetail />} />
          <Route path="/events/technical/:id" element={<TechnicalDetail />} />
          <Route path="/events/hackathon/:id" element={<HackathonDetail />} />
          <Route path="/events/games/:id" element={<GamesDetail />} />
          <Route path="/events/talk/:id" element={<TalkDetail />} />

          <Route path="/tickets" element={<Tickets />} />
        </Routes>
      </main>
      <Footer />
    </Fragment>
  );
};

export default MyRoutes;
