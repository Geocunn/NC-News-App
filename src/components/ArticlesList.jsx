import React, { Component } from "react";
import ArticleCard from "./ArticleCard.jsx";
import * as api from "../api";

class ArticlesList extends Component {
  state = {
    articles: [],
    loading: true,
  };

  componentDidMount = () => {
    api.fetchArticles().then((articles) => {
      const newState = { articles: articles, loading: false };
      this.setState(newState);
    });
  };

  render() {
    const isLoading = this.state.loading;
    if (isLoading) return <p>Loading...</p>;
    return (
      <ul>
        {this.state.articles.map((article, index) => {
          return (
            <ArticleCard
              key={article.article_id}
              information={article}
              number={index % 3}
            />
          );
        })}
      </ul>
    );
  }
}

export default ArticlesList;
