import React, { Component } from "react";

class ArticlePage extends Component {
  state = {
    loading: true,
    article: [],
  };

  componentDidMount = () => {
    fetch(
      `https://nc-news-geocunn.herokuapp.com/api/articles/${this.props.match.params.article_id}`
    )
      .then((response) => response.json())
      .then((data) => {
        const newState = { article: data.article, loading: false };

        this.setState(newState);
      });
  };
  render() {
    const isLoading = this.state.loading;
    if (isLoading) return <p>Loading...</p>;
    return (
      <div className="articlePage">
        <h2 className="articleTitle">{this.state.article[0].title}</h2>
        <h3 className="articleCat">{this.state.article[0].topic}</h3>
        <p className="articleBody">{this.state.article[0].body}</p>
        <p className="articleAuthor">by - {this.state.article[0].author}</p>
        <p className="articleDate">
          {
            new Date(this.state.article[0].created_at)
              .toISOString()
              .split("T")
              .join(" ")
              .split(".")[0]
          }
        </p>
        <a href="/articles/:article_id/comments" className="commentsLink">
          {this.state.article[0].comment_count} Comments
        </a>
        <p className="articleId">
          Article Id : {this.state.article[0].article_id}
        </p>
      </div>
    );
  }
}

export default ArticlePage;
