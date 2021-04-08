import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Title from "./components/Title.jsx";
import React from "react";
import Navbar from "./components/Navbar.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import ArticlesList from "./components/ArticlesList.jsx";
import Home from "./components/Home.jsx";
import ArticlePage from "./components/ArticlePage.jsx";
import CommentsList from "./components/CommentsList.jsx";

function App() {
  return (
    <div className="App">
      <Title />
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/articles" component={ArticlesList} />
          <Route exact path="/articles/:article_id" component={ArticlePage} />
          <Route
            exact
            path="/articles/:article_id/comments"
            component={CommentsList}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
