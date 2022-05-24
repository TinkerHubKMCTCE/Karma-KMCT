import React, { Fragment, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import App from "./App";

import Header from "./components/Header/Header";
import Loader from "./UI/Loader/Loader";
import Footer from "./components/Footer/Footer";

const Gallery = React.lazy(() => import("./pages/Gallery/Gallery"))
const CulturalDetail = React.lazy(() => import("./pages/CulturalDetail/CulturalDetail"))
const TechnicalDetail = React.lazy(() => import("./pages/TechnicalDetail/TechnicalDetail"))
const HackathonDetail = React.lazy(() => import("./pages/HackathonDetail/HackathonDetail"))
const TalkDetail = React.lazy(() => import("./pages/TalkDetail/TalkDetail"))
const Cultural = React.lazy(() => import("./pages/Cultural/Cultural"))
const Technical = React.lazy(() => import("./pages/Technical/Technical"))
const Hackathon = React.lazy(() => import("./pages/Hackathon/Hackathon"))
const Games = React.lazy(() => import("./pages/Games/Games"))
const Talk = React.lazy(() => import("./pages/Talk/Talk"))
const GamesDetail = React.lazy(() => import("./pages/GamesDetail/GamesDetail"))
const EventPage = React.lazy(() => import("./pages/EventPage/EventPage"))
const Tickets = React.lazy(() => import("./pages/Tickets/Tickets"))

const MyRoutes = () => {
  return (
    <Fragment>
      <Header />
      <main>
      <Suspense fallback={<Loader />}>
      <Routes>
          <Route path="/home" element={<App />} />
          <Route path="/" element={<Navigate to="home" />} />
          <Route exact path="/events/*" element={<EventPage />}>
            <Route exact path="cultural" element={<Cultural />} />
            <Route exact path="technical" element={<Technical />} />
            <Route exact path="hackathon" element={<Hackathon />} />
            <Route exact path="games" element={<Games />} />
            <Route path="talk" element={<Talk />} />
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
