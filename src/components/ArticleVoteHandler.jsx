import React, { Component } from "react";
import * as api from "../api";
import Button from "react-bootstrap/Button";

class ArticleVoteHandler extends Component {
  state = {
    voteChanges: 0,
  };

  updateVotes = (article_id, increment) => {
    this.setState((currentState) => {
      return {
        voteChanges: currentState.voteChanges + increment,
      };
    });
    api.changeVotesArticle(article_id, increment);
  };

  render() {
    const { article_id, votes } = this.props;
    const { voteChanges } = this.state;
    return (
      <div className="articleVoteChanger">
        <Button
          className="articleDownButton"
          onClick={() => this.updateVotes(article_id, -1)}
          size="sm"
          variant="warning"
        >
          -
        </Button>
        <p className="articleVotes">Votes : {votes + voteChanges}</p>
        <Button
          className="articleUpButton"
          onClick={() => this.updateVotes(article_id, 1)}
          size="sm"
          variant="info"
        >
          +
        </Button>
      </div>
    );
  }
}

export default ArticleVoteHandler;
