import Articles from "./Articles";

const ArticleList = (props) => {
  return (
    <ul>
      {props.articles.map((article, index) => {
        return <Articles key={article.article_id} information={article} />;
      })}
    </ul>
  );
};

export default ArticleList;
