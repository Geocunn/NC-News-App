import React from "react";

const TopicCard = (props) => {
  return <a href={`/articles?topic=${props.topic.slug}`}>{props.topic.slug}</a>;
};

export default TopicCard;
