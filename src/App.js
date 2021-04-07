import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Title from "./components/Title.jsx";
import React from "react";
import Navbar from "./components/Navbar.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Articles from "./components/Articles.jsx";
import Home from "./components/Home.jsx";

function App() {
  return (
    <div className="App">
      <Title />
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Articles">
            <Articles />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
