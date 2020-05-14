import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import {
  requestAllArticles,
  receiveAllArticles,
  receiveAllArticlesError,
  receiveCurrentArticle,
} from '../../action';

const SearchBar = () => {
  const [articleInput, setArticleInput] = React.useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(requestAllArticles());
    fetch(
      `https://backend-newspaper.herokuapp.com/search?article=${articleInput}`
    )
      .then((res) => res.json())
      .then((data) => {
        const { articles } = data.data;
        const randomNumber = Math.floor(Math.random() * articles.length);
        dispatch(receiveAllArticles(articles));
        dispatch(receiveCurrentArticle(articles[randomNumber]));
      })
      .catch((err) => dispatch(receiveAllArticlesError()));
    setArticleInput('');
  };

  return (
    <React.Fragment>
      <SearchWrapper onSubmit={handleSubmit}>
        <InputField
          name='article'
          value={articleInput}
          onChange={(e) => setArticleInput(e.target.value)}
          placeholder='Search an article...'
        ></InputField>
        <SearchButton>Search</SearchButton>
      </SearchWrapper>
    </React.Fragment>
  );
};

const SearchWrapper = styled.form`
  display: flex;
`;

const InputField = styled.input`
  padding-left: 5px;
  width: 90%;
`;

const SearchButton = styled.button`
  background-color: #000;
  color: #fff;
  outline: none;
  border: none;
  padding: 5px;
  width: 20%;
`;
export default SearchBar;
