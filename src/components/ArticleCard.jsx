import React from "react";

const ArticleCard = (props) => {
  const time = new Date(props.information.created_at).toISOString().split("T");
  const pics = {
    coding: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y29kaW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29kaW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    ],
    football: [
      "https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vdGJhbGx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vdGJhbGx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vdGJhbGx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    ],
    cooking: [
      "https://images.unsplash.com/photo-1514986888952-8cd320577b68?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8Y29va2luZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1547592180-85f173990554?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvb2tpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1605522324043-96094fd06c99?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzN8fGNvb2tpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    ],
    undefined: [
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8bmV3c3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8bmV3c3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1495020689067-958852a7765e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8bmV3c3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    ],
  };

  let topic = props.information.topic;

  console.log(props.index);
  return (
    <a
      className="articleCard"
      href={`/articles/${props.information.article_id}`}
    >
      <h3>{props.information.title}</h3>
      <h4>{topic}</h4>
      <img src={pics[topic][props.number]} alt="placeholder" />
      <div className="extraInfo">
        <p>{time[0]}</p>
        <p>|</p>
        <p>Comments: {props.information.comment_count}</p>
      </div>
    </a>
  );
};

export default ArticleCard;
