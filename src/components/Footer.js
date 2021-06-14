import React from "react";
import styled from "styled-components";
import { AiFillGithub } from "react-icons/ai";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

const Container = styled.div`
  background: black;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.h2`
  font-family: Tungsten;
  font-size: 2rem;
  color: white;
`;

const FooterItem = styled.li`
  cursor: pointer;
  list-style: none;
  &:hover {
    color: #ff356b;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-around;
  color: white;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  margin: 2rem;
`;

const StyledAiFillGithub = styled(AiFillGithub)`
  &:hover {
    fill: #ff356b;
  }
`;

function Footer() {
  return (
    <Container>
      <Logo>CYCLING SHOP</Logo>
      <LinkContainer>
        <StyledLink to="/about">
          <FooterItem>About</FooterItem>
        </StyledLink>
        <StyledLink to="/shop">
          <FooterItem>Shop</FooterItem>
        </StyledLink>
        <StyledLink>
          <FooterItem>Contact</FooterItem>
        </StyledLink>
      </LinkContainer>
      <a href="https://github.com/Atlas-1510/shopping-cart">
        <IconContext.Provider value={{ color: "white", size: "3rem" }}>
          <StyledAiFillGithub />
        </IconContext.Provider>
      </a>
    </Container>
  );
}

export default Footer;
