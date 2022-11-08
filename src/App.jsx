import React from "react";
import { Home } from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import HomeCard from "./components/HomeCard";

import Capture from "./pages/ctf";
import NavBar from "./components/Navbar";

import Events from "./components/Events";

function App() {
  let eventDetails = {
    name: "CAPTURE THE FLAG",
    description:
      "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publi",
    rules:
      "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley ",
    contact: "PHONE NO AND EMAIL HERE",
  };
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
        <Route
          path="/ctf"
          element={
            <Capture
              name={eventDetails.name}
              description={eventDetails.description}
              rules={eventDetails.rules}
              contact={eventDetails.contact}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
