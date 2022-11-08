import React from "react";
import { Home } from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import HomeCard from "./components/HomeCard";

import Capture from "./pages/ctf";
import NavBar from "./components/Navbar";

import Events from "./components/Events";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Events eventType="workshop" />} />
          <Route path="/workshop" element={<Events eventType="workshop" />} />

          <Route
            path="/competitions"
            element={<Events eventType="competitions" />}
          />

          <Route path="/talks" element={<Events eventType="talks" />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/ctf" element={<Capture />} />
        <Route path="*" element={<NotFound />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
