import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../assets/routes/routes";
import styled from "styled-components";

const Navigation = () => {
  return (
    <Wrapper>
      <NavLink to={routes[0].path}>Top Charts</NavLink>
      <NavLink to={routes[1].path}>Search for track</NavLink>
    </Wrapper>
  );
};

export default Navigation;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
`;
