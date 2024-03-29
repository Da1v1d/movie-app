import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarComponent = styled.nav`
  background-color: transparent;
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100px;
  padding: 20px;
  color: white;
  display: flex;
  justify-content: ${(props) => (props.isMobile ? "center" : "space-between")};
  a {
    margin-right: 20px;
  }
`;

export const NavbarLink = styled(Link)`
  text-decoration: none;
  position: relative;
  &:after {
    position: absolute;
    content: "";
    bottom: -20px;
    left: 50%;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #ff0000;
    display: ${(props) => (props.isActive ? "block" : "none")};
    transform: translate(-50%, -50%);
  }
`;
