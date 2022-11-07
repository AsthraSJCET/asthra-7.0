import React from "react";
import { Home, Events } from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import HomeCard from "./components/HomeCard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route
            index="true"
            path="/"
            element={<Events eventName="Ev-Name" dateTime="Nov2, 9AM" />}
          />
          <Route path="/workshops" element={<Events eventType="workshops" />} />
          <Route
            path="/competitions"
            element={<Events eventType="workshop" />}
          />
          <Route path="/workshops" element={<Events />} />
          <Route path="/workshops" element={<Events />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
