import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { Col } from 'react-bootstrap';
import { format } from 'date-fns';

import { receiveCurrentArticle } from '../../action';

const MainArticle = () => {
  const articles = useSelector((state) => state.articles);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (articles.status === 'idle') {
      let randomNumber = Math.floor(Math.random() * articles.data.length);
      dispatch(receiveCurrentArticle(articles.data[randomNumber]));
    }
  }, [articles.status]);

  return (
    <Col md={8} style={{ marginBottom: '10px' }}>
      {articles.currentArticle ? (
        <>
          <ArticleTitle>{articles.currentArticle.title}</ArticleTitle>
          <PublishDate>
            {articles.currentArticle.publishedAt &&
              format(
                Date.parse(
                  new Date(
                    articles.currentArticle.publishedAt
                      .toString()
                      .slice(
                        0,
                        articles.currentArticle.publishedAt
                          .toString()
                          .indexOf('T')
                      )
                  )
                ),
                'MMMM do yyyy'
              )}
          </PublishDate>
          <Picture src={articles.currentArticle.urlToImage}></Picture>
          <Content>{articles.currentArticle.content}</Content>
          <Link href={articles.currentArticle.url}>Continue reading...</Link>
        </>
      ) : (
        <h1>No articles found!</h1>
      )}
    </Col>
  );
};

const ArticleTitle = styled.h4`
  font-weight: bold;
  margin: 0;
`;

const PublishDate = styled.p`
  color: #bec8c8;
  margin-top: 5px;
`;

const Picture = styled.img`
  width: 100%;
`;

const Content = styled.p`
  margin-top: 10px;
`;

const Link = styled.a`
  color: blue;
  text-align: center;
  margin-bottom: 10px;
`;

export default MainArticle;
