export const requestAllArticles = () => ({ type: 'REQUEST_ALL_ARTICLES' });
export const receiveAllArticles = (payload) => ({
  type: 'RECEIVE_ALL_ARTICLES',
  payload,
});
export const receiveAllArticlesError = () => ({
  type: 'RECEIVE_ALL_ARTICLES_ERROR',
});
export const receiveCurrentArticle = (payload) => ({
  type: 'RECEIVE_CURRENT_ARTICLE',
  payload,
});
