import React, { Component } from "react";
import * as api from "../api";
import Button from "react-bootstrap/Button";

class CommentVoteHandler extends Component {
  state = {
    voteChanges: 0,
  };

  updateVotes = (comment_id, increment) => {
    this.setState((currentState) => {
      return {
        voteChanges: currentState.voteChanges + increment,
      };
    });
    api.changeVotesComment(comment_id, increment);
  };

  render() {
    const { comment_id, votes } = this.props;
    const { voteChanges } = this.state;
    return (
      <div className="commentVoteChanger">
        <Button
          className="commentDownButton"
          onClick={() => this.updateVotes(comment_id, -1)}
          size="sm"
          variant="warning"
        >
          -
        </Button>
        <p className="commentVotes">{votes + voteChanges}</p>
        <Button
          className="commentUpButton"
          onClick={() => this.updateVotes(comment_id, 1)}
          size="sm"
          variant="info"
        >
          +
        </Button>
      </div>
    );
  }
}

export default CommentVoteHandler;
