import React from "react";
import { Home } from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Capture from "./pages/ctf";
import Events from "./components/Events";
import Profile from "./components/profile";
import { useAuth0 } from "@auth0/auth0-react";
import {Helmet} from 'react-helmet'
import LoginButton from "./components/loginButton";
import LogoutButton from "./components/logoutButton"

function App() {
  const { isLoading, error } = useAuth0();

  let eventDetails = [
    {
      name: "CAPTURE THE FLAG",
      description:
        "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publi",
      rules:
        "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley ",
      contact: "PHONE NO AND EMAIL HERE",
    },
    {
      name: "CAPTURE THE FLAG",
      description:
        "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publi",
      rules:
        "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley ",
      contact: "PHONE NO AND EMAIL HERE",
    },
  ];

  return (
    <main className="column">
                  <Helmet>
            <title>Asthra 7.0</title>
            <link rel="favicon" href="Logo.svg" type="image/svg"/>
            </Helmet>
      {/* <h1>Auth0 Login</h1> */}
      {error && <p>Authentication Error</p>}
      {/* {!error && isLoading && <p>Loading...</p>} */}
      {!error && !isLoading && (
        <>
          {/* <LoginButton />
          <LogoutButton />  */}
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />}>
                <Route index element={<Events eventType="workshop" />} />
                <Route
                  path="/workshops"
                  element={<Events eventType="workshop" />}
                />
                <Route
                  path="/competitions"
                  element={<Events eventType="competitions" />}
                />
                <Route path="/talks" element={<Events eventType="talks" />} />
                <Route path="*" element={<NotFound />} />
              </Route>
              <Route
                path="/workshop/:id"
                element={
                  <Capture
                    name={eventDetails[0].name}
                    description={eventDetails[0].description}
                    rules={eventDetails[0].rules}
                    contact={eventDetails[0].contact}
                  />
                }
              />

              <Route
                path="/competition/:id"
                element={
                  <Capture
                    name={eventDetails[0].name}
                    description={eventDetails[0].description}
                    rules={eventDetails[0].rules}
                    contact={eventDetails[0].contact}
                  />
                }
              />

              <Route
                path="/workshop/:id"
                element={
                  <Capture
                    name={eventDetails[0].name}
                    description={eventDetails[0].description}
                    rules={eventDetails[0].rules}
                    contact={eventDetails[0].contact}
                  />
                }
              />
              <Route path="*" element={<NotFound />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </BrowserRouter>
        </>
      )}
    </main>
  );
}

export default App;
