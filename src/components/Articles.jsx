import React, { Component } from "react";
import ArticleCard from "./ArticleCard";

class Articles extends Component {
  state = {
    articles: [],
    loading: true,
  };

  componentDidMount = () => {
    fetch("https://nc-news-geocunn.herokuapp.com/api/articles")
      .then((response) => response.json())
      .then((data) => {
        const newState = { articles: data.articles, loading: false };

        this.setState(newState);
      });
  };

  render() {
    const isLoading = this.state.loading;
    if (isLoading) return <p>Loading...</p>;
    return (
      <ul>
        {this.state.articles.map((article, index) => {
          return <ArticleCard key={article.article_id} information={article} />;
        })}
      </ul>
    );
  }
}

export default Articles;
