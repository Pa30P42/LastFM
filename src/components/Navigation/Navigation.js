import React from "react";

import routes from "../../assets/routes/routes";
import { Wrapper, Nav, StyledNavLink } from "./navigationStyled";

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
