import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import Post from '../Post';
const Posts = () => {
  const articles = useSelector((state) => state.articles);

  return (
    <PostsWrapper>
      {articles.data
        .filter((article) => article.urlToImage !== null)
        .map((article, index) => {
          return <Post key={index} article={article} />;
        })}
    </PostsWrapper>
  );
};

const PostsWrapper = styled.div`
  height: 500px;
  overflow: hidden;
  overflow-y: scroll;
`;
export default Posts;
