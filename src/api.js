import axios from "axios";

const request = axios.create({
  baseURL: "https://nc-news-geocunn.herokuapp.com/api",
});

export const fetchArticles = () => {
  return request.get("/articles").then(({ data }) => {
    return data.articles;
  });
};

export const getArticle = (article_id) => {
  return request.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

export const getArticleComments = (article_id) => {
  return request
    .get(`/articles/${article_id}/comments`, { params: { sort_by: "desc" } })
    .then(({ data }) => {
      return data.comments;
    });
};

export const changeVotesComment = (comment_id, increment) => {
  return request.patch(`/comments/${comment_id}`, { inc_votes: increment });
};

export const changeVotesArticle = (article_id, increment) => {
  return request.patch(`/articles/${article_id}`, { inc_votes: increment });
};

export const fetchTopics = () => {
  return request.get(`/topics`).then(({ data }) => {
    return data.topics;
  });
};

export const fetchFilteredTopics = (filter) => {
  return request
    .get(`/articles`, { params: { topic: filter } })
    .then(({ data }) => {
      return data.articles;
    });
};
