import React, { Component } from "react";
import * as api from "../api";
import TopicCard from "./TopicCard";

class TopicsList extends Component {
  state = {
    topics: [],
    loading: true,
  };

  componentDidMount = () => {
    api.fetchTopics().then((topics) => {
      const newState = { topics: topics, loading: false };
      this.setState(newState);
    });
  };

  render() {
    return (
      <div className="topics">
        <h1>Topics</h1>
        <ul>
          {this.state.topics.map((topic) => {
            return <TopicCard key={topic.slug} topic={topic} />;
          })}
        </ul>
      </div>
    );
  }
}

export default TopicsList;
