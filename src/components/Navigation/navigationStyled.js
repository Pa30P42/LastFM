import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.div`
  display: flex;
  justify-content: space-around;
  width: 750px;
  margin: 0 auto;
`;

export const StyledNavLink = styled(NavLink)`
  text-transform: uppercase;
  font-weight: 400;
  color: #08979c;
  font-size: 28px;

  &.active {
    color: #ffffff;
  }
`;

export const Wrapper = styled.div`
  padding: 20px;
  width: 100%;
  background-color: #00474f;
  -moz-box-shadow: 3px 3px 5px 6px #ccc;
  -webkit-box-shadow: 3px 3px 5px 6px #ccc;
  box-shadow: 3px 3px 5px 6px #ccc;
  margin-bottom: 20px;
`;
