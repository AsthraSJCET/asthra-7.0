import React from "react";
import { IndexTemplate } from "./pages/template";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Capture from "./pages/eventPage";
import Events from "./components/Events";
import { useAuth0 } from "@auth0/auth0-react";
import { Helmet } from 'react-helmet'
import MainTabs from "./components/MainTabs"
import RegisterForm from "./components/RegisterForm"
import { AsthraContext } from "./etc/context";
import Home from "./pages/Home";


function App() {
  const { user, isLoading, error, isAuthenticated } = useAuth0();

  if (!isLoading) {
    let data = {
      isAuthenticated: isAuthenticated,
      user: user
    }

    return (
      <main className="column">
        <Helmet>
          <title>Asthra 7.0</title>
          <link rel="favicon" href="https://picsum.photos/256/256" type="image/svg" />
        </Helmet>
        {!error ? (
          <>
            <AsthraContext.Provider value={data}>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<IndexTemplate />}>
                    <Route index element={<Home />} />
                    <Route path="/about" element={<></>} />
                    <Route path="/tickets" element={<></>} />
                    <Route path="/ambassador" element={<></>} />
                    <Route path="/contact" element={<></>} />

                    <Route path="/workshops" element={<>< MainTabs /><Events eventType="workshop" /></>} />
                    <Route path="/competitions" element={<>< MainTabs /><Events eventType="competition" /></>} />
                    <Route path="/events" element={<>< MainTabs /><Events eventType="event" /></>} />
                    <Route path="/talks" element={<Events eventType="talks" />} />
                    <Route path="/workshop/:code" element={<Capture />} />
                    <Route path="/competition/:code" element={<Capture />} />
                    <Route path="/event/:code" element={<Capture />} />
                    <Route path="/register/:code" element={<RegisterForm />} />
                    <Route path="*" element={<NotFound />} />
                  </Route>
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </BrowserRouter>
            </AsthraContext.Provider>
          </>
        ) : <div>{error}</div>}
      </main>
    );
  } else {
    return (
      <div className="text-white">Loading...</div>
    )
  }

}

export default App;
