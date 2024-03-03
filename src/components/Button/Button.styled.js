import { Link } from "react-router-dom";
import styled from "styled-components";

export const ButtonComponent = styled.button`
  background-color: ${({ variant }) =>
    variant === "filled" ? "red" : "transparent"};
  border: 1px solid red;
  border-radius: 5px;
  font-size: 24px;
  font-weight: 800;
  padding: 12px;
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 10px;
  text-decoration: none;
`;

export const LinkButton = styled(Link)`
  background-color: ${({ variant }) =>
    variant === "filled" ? "red" : "transparent"};
  border: 1px solid red;
  border-radius: 5px;
  font-size: 24px;
  font-weight: 800;
  padding: 0 12px;
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 10px;
`;
