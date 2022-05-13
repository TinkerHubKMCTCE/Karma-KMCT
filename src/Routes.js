import { Route, Routes, Navigate } from "react-router-dom";

import React, { Fragment } from "react";
import App from "./App";
import EventPage from "./pages/EventPage/EventPage";
import EventDetail from "./pages/EventDetail/EventDetail"
import Header from "./components/Header/Header";
// import Culturals from "./components/Culturals/Culturals";
// import Desafio from "./components/Culturals/Desafio/Desafio";
// import VogueFiesta from "./components/Culturals/VogueFiesta/VogueFiesta";
// import Aghaidh from "./components/Culturals/Aghaidh/Aghaidh";
// import PencilDrawing from "./components/Culturals/PencilDrawing/PencilDrawing";
// import LightMusic from "./components/Culturals/LightMusic/LightMusic";
import Cultural from "./pages/Cultural/Cultural";
import Technical from "./pages/Technical/Technical"
import Footer from "./components/Footer/Footer";

const MyRoutes = () => {
  return (
    <Fragment>
    <main>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/events/*" element={<EventPage />}>
            <Route path="cultural/*" element={<Cultural />} />
            <Route path="technical" element={<Technical />} />
          </Route>
          <Route path="/events" element={<Navigate to="cultural" />} />
          <Route path="/events/cultural/:id" element={<EventDetail />} />
          {/* <Route path="/culturals" element={<Culturals />} />
          <Route path="/desafio" element={<Desafio />} />
          <Route path="/voguefiesta" element={<VogueFiesta />} />
          <Route path="/aghaidh" element={<Aghaidh />} />
          <Route path="/pencildrawing" element={<PencilDrawing />} />
          <Route path="/lightmusic" element={<LightMusic />} /> */}
        </Routes>
        <Footer />
        </main>
    </Fragment>
  );
};

export default MyRoutes;
