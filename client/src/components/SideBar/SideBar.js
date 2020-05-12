import React from 'react';
import { Col } from 'react-bootstrap';

import SearchBar from '../SearchBar';
import ConnectUs from '../ConnectUs';
import RecentPosts from '../RecentPosts';

const SideBar = () => {
  return (
    <Col md={4} style={{ padding: '0px' }}>
      <SearchBar />
      <ConnectUs />
      <RecentPosts />
    </Col>
  );
};

export default SideBar;
