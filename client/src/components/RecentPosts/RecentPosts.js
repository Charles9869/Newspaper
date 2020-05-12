import React from 'react';
import styled from 'styled-components';
import Posts from '../Posts';

const RecentPosts = () => {
  return (
    <>
      <HeadingWrapper>
        <Heading>Recent Posts</Heading>
        <div></div>
      </HeadingWrapper>
      <Posts />
    </>
  );
};

const HeadingWrapper = styled.div`
  border-bottom: 2px solid #000;
  margin-top: 20px;
`;

const Heading = styled.div`
  width: 50%;
  text-align: center;
  background-color: #000;
  color: #fff;
  font-size: 20px;
`;
export default RecentPosts;
