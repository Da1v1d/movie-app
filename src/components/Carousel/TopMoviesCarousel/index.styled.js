import styled from "styled-components";
import { Button } from "../../Button/Button";

export const WatchNowButton = styled(Button)`
  position: absolute;
  top: 50%;
  right: 50%;
  opacity: 80%;
  transition: opacity 0.2s linear;

  &:hover {
    opacity: 100%;
  }
`;
