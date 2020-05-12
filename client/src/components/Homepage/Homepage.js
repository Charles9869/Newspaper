import React from 'react';
import { Row } from 'react-bootstrap';
import MainArticle from '../MainArticle';
import SideBar from '../SideBar';

const Homepage = () => {
  return (
    <Row style={{ marginTop: '50px' }}>
      <MainArticle />
      <SideBar />
    </Row>
  );
};

export default Homepage;
