import React, { Fragment, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import App from "./App";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const PreLoader = React.lazy(() => import("./pages/PreLoader/PreLoader"))
const Gallery = React.lazy(() => import("./pages/Gallery/Gallery"))
const CulturalDetail = React.lazy(() => import("./pages/CulturalDetail/CulturalDetail"))
const TechnicalDetail = React.lazy(() => import("./pages/TechnicalDetail/TechnicalDetail"))
const HackathonDetail = React.lazy(() => import("./pages/HackathonDetail/HackathonDetail"))
const Cultural = React.lazy(() => import("./pages/Cultural/Cultural"))
const Technical = React.lazy(() => import("./pages/Technical/Technical"))
const Hackathon = React.lazy(() => import("./pages/Hackathon/Hackathon"))
const Games = React.lazy(() => import("./pages/Games/Games"))
const GamesDetail = React.lazy(() => import("./pages/GamesDetail/GamesDetail"))
const EventPage = React.lazy(() => import("./pages/EventPage/EventPage"))
const Tickets = React.lazy(() => import("./pages/Tickets/Tickets"))

const MyRoutes = () => {
  return (
    <Fragment>
      <Header />
      <main>
      <Suspense fallback={<PreLoader />}>
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
        </Suspense>
      </main>
      <Footer />
    </Fragment>
  );
};

export default MyRoutes;
