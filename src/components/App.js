import React from "react";

// REDUX
import { Provider } from "react-redux";
import store from "../store";

// REACT ROUTER
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// COMPONENTS
import Navbar from "./Navbar";
import Main from "./sections/Main";
import AboutMe from "./sections/AboutMe";
import Projects from "./sections/Projects";
import ContactMe from "./sections/ContactMe";

// CSS
import "../css/default.css";

// FONT AWESOME ICONS
import "./FontawesomeIcons";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Main />
            <Projects />
            <AboutMe />
            <ContactMe />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
