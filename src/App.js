import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Title from "./components/Title.jsx";
import React from "react";
import Navbar from "./components/Navbar.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Articles from "./components/Articles.jsx";
import Home from "./components/Home.jsx";
import ArticlePage from "./components/ArticlePage.jsx";

function App() {
  return (
    <div className="App">
      <Title />
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/articles" component={Articles} />
          <Route exact path="/articles/:article_id" component={ArticlePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
