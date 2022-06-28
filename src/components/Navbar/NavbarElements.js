import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background: #fff;
  height: 80px;
  display: flex;
  justify-content: space-between;
  z-index: 10;
  font-family: 'Quicksand', sans-serif;
  font-weight: lighter;
`;

export const NavLink = styled(Link)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #76b5c5;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: flex-end;
  margin-right: 20px;
  }
`;
