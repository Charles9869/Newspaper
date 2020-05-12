import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <HeaderWrapper>
      <Title>NEWSPAPER</Title>
      <SubTitle>
        <a href='https://newsapi.org/'>Powered by News API</a>{' '}
      </SubTitle>
      <Navbar>
        <NavbarLink exact to='/' activeStyle={{ color: 'gray' }}>
          HOME
        </NavbarLink>
        <NavbarLink exact to='/archives' activeStyle={{ color: 'gray' }}>
          ARCHIVES
        </NavbarLink>
        <NavbarLink exact to='/categories' activeStyle={{ color: 'gray' }}>
          CATEGORIES
        </NavbarLink>
        <NavbarLink exact to='/tags' activeStyle={{ color: 'gray' }}>
          TAGS
        </NavbarLink>
        <NavbarLink exact to='/about' activeStyle={{ color: 'gray' }}>
          ABOUT
        </NavbarLink>
      </Navbar>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  margin-top: 10px;
`;

const Title = styled.h1`
  margin: 0;
`;

const SubTitle = styled.p`
  a {
    color: #bec8c8;
  }

  margin: 0;
`;

const Navbar = styled.nav`
  display: flex;
  padding: 10px 10px 10px 0px;
  margin-top: 10px;
  border-top: 1px solid #000;
  border-bottom: 2px solid #000;
`;

const NavbarLink = styled(NavLink)`
  font-size: 15px;
  padding: 0px 10px;
`;
export default Header;
