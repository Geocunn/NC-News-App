import React from "react";

const ArticleCard = (props) => {
  const time = new Date(props.information.created_at).toString().split("(");
  return (
    <div className="articleCard">
      <h3>{props.information.title}</h3>
      <h4>{time}</h4>
      <img
        src="https://images.unsplash.com/photo-1586253633232-8161270c5b6e?ixid=MXwxMjA3fDB8MHxwaG90[…]ufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        alt="placeholder"
      />
    </div>
  );
};

export default ArticleCard;
