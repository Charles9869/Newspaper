import React from 'react';
import styled from 'styled-components';
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from 'react-icons/ai';
import { FaFacebookF, FaGooglePlusG } from 'react-icons/fa';

const ConnectUs = () => {
  return (
    <Wrapper>
      <h5>CONNECT WITH US</h5>
      <ListItem>
        <Item>
          <AiFillGithub />
        </Item>
        <Item>
          <AiOutlineTwitter />
        </Item>
        <Item>
          <FaFacebookF />
        </Item>
        <Item>
          <FaGooglePlusG />
        </Item>
        <Item>
          <AiOutlineInstagram />
        </Item>
      </ListItem>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 30px;
  text-align: center;

  h5 {
    border-bottom: 2px solid #000;
    padding-bottom: 5px;
  }
`;

const ListItem = styled.div`
  display: flex;
  justify-content: center;
`;

const Item = styled.div`
  width: 30px;
  height: 30px;
  background-color: #000;
  color: #fff;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 300ms ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: gray;
  }
`;
export default ConnectUs;
