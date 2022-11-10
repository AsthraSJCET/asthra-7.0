import React, { useEffect, useState } from "react";
import { Home } from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Capture from "./pages/eventPage";
import Events from "./components/Events";
import Profile from "./components/profile";
import { useAuth0 } from "@auth0/auth0-react";
import {Helmet} from 'react-helmet'
import axios from "axios";
import {publicAPI} from "./etc/api"


function App() {
  const { isLoading, error } = useAuth0();
  const [loading, setLoading] = useState(true)
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
  const [data, setData] = useState(eventDetails)

  // let data = null
  
      useEffect(()=>{
        publicAPI.get("/events/event").then(async resp=>{
          // data = resp.data
          setData(resp.data)
          setLoading(false)
        }).catch(err=>{
          console.log(err)
        })
      }, []);
      console.log(data)

      if (!loading) {
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
                    <Route index element={<Events eventType="Workshops" />} />
                    <Route
                      path="/Workshops"
                      element={<Events eventType="Workshops" />}
                    />
                    <Route
                      path="/competitions"
                      element={<Events eventType="competitions" />}
                    />
                    <Route
                      path="/events"
                      element={<Events eventType="event" />}
                    />
                    <Route path="/talks" element={<Events eventType="talks" />} />
                    <Route path="*" element={<NotFound />} />
                  </Route>
                  <Route
                    path="/Workshops/:id"
                    element={
                      <Capture
                        name={data[0].name}
                        description={data[0].desc}
                        rules={data[0].rules}
                        contact={data[0].cordinator1_contact}
                      />
                    }
                  />
    
                  <Route
                    path="/competition/:id"
                    element={
                      <Capture
                        name={data[0].name}
                        description={data[0].description}
                        rules={data[0].rules}
                        contact={data[0].contact}
                      />
                    }
                  />
    
                  <Route
                    path="/workshop/:id"
                    element={
                      <Capture
                        name={data[0].name}
                        description={data[0].description}
                        rules={data[0].rules}
                        contact={data[0].contact}
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
                   } else {
        return (
          <div className="text-white">Loading</div>
        )
      }
  
}

export default App;
