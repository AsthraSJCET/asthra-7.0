import React from "react";
import { IndexTemplate, ListPageTemplate } from "./pages/template";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Capture from "./pages/eventPage";
import { useAuth0 } from "@auth0/auth0-react";
import { Helmet } from 'react-helmet'
import RegisterForm from "./components/RegisterForm"
import { AsthraContext } from "./etc/context";
import Home from "./pages/Home";
import MyTickets from "./pages/tickets";
import Loader from "./lib/Loader";
import { publicAPI } from "./etc/api";

class AsthraAppMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: this.props.data.isAuthenticated,
      user: this.props.data.user,
      asthra_user: null,
      tickets: null
    }
    this.syncData = this.syncData.bind(this);
  }
  syncData = () => {
    publicAPI.post('/sync-asthra', {}, {
      headers: {
        'Authorization': this.props.data.user.email
      }
    }).then(response => {
      console.log(response.data);
      this.setState({ asthra_user: response.data.user, tickets: response.data.ticket })
    }).catch(e => {
      console.log(e);
    })
  }
  componentDidMount() {
    if (
      this.props.data.isAuthenticated
    ) {
      this.syncData();
    }
  }
  render() {
    return (<main className="column">
      <Helmet>
        <title>Asthra 7.0</title>
        {/* <link rel="favicon" href="https://picsum.photos/256/256" type="image/svg" /> */}
      </Helmet>
      <AsthraContext.Provider value={this.state}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<IndexTemplate />}>
              <Route index element={<Home />} />
              <Route path="/about" element={<></>} />
              <Route path="/ambassador" element={<></>} />
              <Route path="/contact" element={<></>} />

              <Route path="/workshops" element={<><ListPageTemplate page="workshop" /></>} />
              <Route path="/competitions" element={<><ListPageTemplate page="competition" /></>} />
              <Route path="/events" element={<><ListPageTemplate page="event" /></>} />
              <Route path="/expo" element={<><ListPageTemplate page="exhibition" /></>} />

              <Route path="/workshop/:code" element={<Capture />} />
              <Route path="/competition/:code" element={<Capture />} />
              <Route path="/event/:code" element={<Capture />} />
              <Route path="/exhibition/:code" element={<Capture />} />

              <Route path="/tickets" element={<MyTickets />} />
              <Route path="/register/:code" element={<RegisterForm />} />

              <Route path="*" element={<NotFound />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AsthraContext.Provider>
    </main>
    )
  }
}

function App() {
  const { user, isLoading, error, isAuthenticated } = useAuth0();
  if (!isLoading) {
    let data = {
      isAuthenticated: isAuthenticated,
      user: user,
      asthra_user: null,
      tickets: null
    }
    return (<>{!error ? <AsthraAppMain data={data} /> : <div>{error}</div>}</>);
  } else {
    return (
      <div className="text-white">Loading...
        <Loader />
      </div>
    )
  }

}

export default App;
