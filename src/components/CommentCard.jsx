import React from "react";
import VoteHandler from "./CommentVoteHandler.jsx";

const CommentCard = (props) => {
  return (
    <li key={props.comment.comment_id} className="comment">
      <h3 className="commentUser">{props.comment.author}</h3>
      <p className="commentBody">{props.comment.body}</p>
      <p className="commentTime">
        on{" "}
        {
          new Date(props.comment.created_at)
            .toISOString()
            .split("T")
            .join(" ")
            .split(".")[0]
        }
      </p>
      <VoteHandler
        comment_id={props.comment.comment_id}
        votes={props.comment.votes}
      />
    </li>
  );
};

export default CommentCard;
