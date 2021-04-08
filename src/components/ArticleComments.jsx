import React, { Component } from "react";
import * as api from "../api";
import Button from "react-bootstrap/Button";

class ArticleComments extends Component {
  state = {
    loading: true,
    comments: [],
    voteChanges: [],
  };

  updateVotes = (comment_id, increment) => {
    this.setState((currentState) => {
      return {
        voteChanges: currentState.voteChanges + increment,
      };
    });
    api.changeVotes(comment_id, increment);
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
    const { voteChanges } = this.state;

    return (
      <div className="commentSection">
        <a href={`/articles/${this.props.match.params.article_id}`}>Back</a>
        <h1>Comments</h1>
        <ul>
          {this.state.comments.map((comment) => {
            return (
              <li key={comment.comment_id} className="comment">
                <h3 className="commentUser">{comment.author}</h3>
                <p className="commentBody">{comment.body}</p>
                <Button
                  className="commentUpButton"
                  onClick={() => this.updateVotes(comment.comment_id, 1)}
                  size="sm"
                  variant="info"
                >
                  ^
                </Button>
                <p className="commentVotes">{comment.votes + voteChanges}</p>
                <Button
                  className="commentDownButton"
                  onClick={() => this.updateVotes(comment.comment_id, -1)}
                  size="sm"
                  variant="warning"
                >
                  ˅
                </Button>
                <p className="commentTime">
                  on{" "}
                  {
                    new Date(comment.created_at)
                      .toISOString()
                      .split("T")
                      .join(" ")
                      .split(".")[0]
                  }
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ArticleComments;
