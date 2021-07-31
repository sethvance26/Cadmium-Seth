import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import "semantic-ui-css/semantic.min.css";

import Home from "./pages/Home";
import FormExampleFieldControl from "./pages/EventForm";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Nav from "./components/Nav";
import { StoreProvider } from "./utils/GlobalState";
import Success from "./pages/Success";
import OrderHistory from "./pages/OrderHistory";
import Map from "./components/Map/Map";
import background from "../src/images/GalleryImage2.jpg";
import EventList from "./components/ProductList/index";


const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const WithAuth = ({ children }) => {
  const history = useHistory();
  const isLoggedIn = true;
  // localStorage.getItem('id_token'); //here you would check for the token
  if (!isLoggedIn) {
    history.push("/login");
    return <div>You are not authorized to view this page.</div>;
    // above we are returning a div about authendictaion but we could also redirect them to the login page with history.push
    //redirect to home page useHistory react dom push address to /login or /
  }
  return children;
};

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <StoreProvider>
            <WithAuth>
              <Nav />
            </WithAuth>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/success" component={Success} />
              <Route exact path="/orderHistory" component={OrderHistory} />
              <Route exact path="/map" component={Map} />

              {/* <WithAuth>
                <Map />
              </WithAuth> */}
              <Route exact path="/products/:id" component={Detail} />

              <Route
                exact
                path="/event-form"
                component={FormExampleFieldControl}
              />
              <Route exact path="/events" component={EventList}>
                {/* <WithAuth>
                  <EventList />
                </WithAuth> */}
              </Route>

              {/* <WithAuth>
                  <FormExampleFieldControl/>
                </WithAuth> */}

              {/* <Route exact path="/events" component={EventList} /> */}

              {/* <Route exact path="/events" component={EventList}/> */}
              {/* <EventList/> */}
              <Route component={NoMatch} />
            </Switch>
            {/* <img className="background" src={background} alt="background..." /> */}
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
