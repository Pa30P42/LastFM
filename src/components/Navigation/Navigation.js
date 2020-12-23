import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../assets/routes/routes";
import styled from "styled-components";

const Navigation = () => {
  return (
    <Wrapper>
      <Nav>
        <StyledNavLink exact to={routes[0].path}>
          Top Charts
        </StyledNavLink>
        <StyledNavLink to={routes[1].path}>Search for track</StyledNavLink>
      </Nav>
    </Wrapper>
  );
};

export default Navigation;

const Nav = styled.div`
  display: flex;
  justify-content: space-around;
  width: 750px;
  margin: 0 auto;
`;

const StyledNavLink = styled(NavLink)`
  font-family: "Roboto";
  color: rgba(0, 0, 0, 0.6);

  text-shadow: 2px 8px 6px rgba(0, 0, 0, 0.2),
    0px -5px 35px rgba(255, 255, 255, 0.3);

  font-weight: 800;
  font-size: 28px;

  &.active {
    color: red;
  }
`;

const Wrapper = styled.div`
  padding: 20px;
  width: 100%;
  background-color: #8c8c8c;
  -moz-box-shadow: 3px 3px 5px 6px #ccc;
  -webkit-box-shadow: 3px 3px 5px 6px #ccc;
  box-shadow: 3px 3px 5px 6px #ccc;
  margin-bottom: 20px;
`;
