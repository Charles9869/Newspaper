import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { receiveCurrentArticle } from '../../action';
import { format } from 'date-fns';

const Post = ({ article }) => {
  const dispatch = useDispatch();
  const handleSubmit = () => dispatch(receiveCurrentArticle(article));

  return (
    <PostWrapper>
      <a onClick={handleSubmit} href='#' style={{ display: 'flex' }}>
        {article.urlToImage !== null ? (
          <Picture src={article.urlToImage}></Picture>
        ) : (
          <NoImage style={{ textAlign: 'center', border: '2px solid blue' }}>
            No image
          </NoImage>
        )}
        <InfoWrapper>
          <p>{article.title}</p>
          <PublishedAt>
            {format(
              Date.parse(
                new Date(
                  article.publishedAt
                    .toString()
                    .slice(0, article.publishedAt.toString().indexOf('T'))
                )
              ),
              'MMMM do yyyy'
            )}
          </PublishedAt>
        </InfoWrapper>
      </a>
    </PostWrapper>
  );
};

const PostWrapper = styled.div`
  display: flex;
  margin: 10px 0px;
`;

const Picture = styled.img`
  height: auto;
  width: 80px;
`;

const NoImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 80px;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
  p {
    margin: 0;
    font-size: 15px;
    line-height: 1;
    padding-bottom: 5px;
  }
`;

const PublishedAt = styled.p`
  color: #bec8c8;
`;
export default Post;
