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
          <Route index element={<Events eventType="workshop" />} />
          <Route path="/workshop" element={<Events eventType="workshop" />} />

          <Route
            path="/competitions"
            element={<Events eventType="competitions" />}
          />

          <Route path="/talks" element={<Events eventType="talks" />} />

          <Route path="/talks" element={<Events eventType="talks" />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
