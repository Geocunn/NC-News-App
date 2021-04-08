import React, { Component } from "react";
import CommentCard from "./CommentCard.jsx";
import * as api from "../api";

class CommentsList extends Component {
  state = {
    loading: true,
    comments: [],
  };
  componentDidMount = () => {
    api
      .getArticleComments(this.props.match.params.article_id)
      .then((comments) => {
        const newState = { comments: [...comments], loading: false };
        this.setState(newState);
      });
  };
  render() {
    const isLoading = this.state.loading;
    if (isLoading) return <p>Loading...</p>;
    return (
      <div className="commentSection">
        <a
          className="pageLink"
          href={`/articles/${this.props.match.params.article_id}`}
        >
          Back to article
        </a>
        <h1>Comments</h1>
        <ul>
          {this.state.comments.map((comment) => {
            return <CommentCard key={comment.comment_id} comment={comment} />;
          })}
        </ul>
        <a
          className="pageLink"
          href={`/articles/${this.props.match.params.article_id}`}
        >
          Back to article
        </a>
      </div>
    );
  }
}

export default CommentsList;
