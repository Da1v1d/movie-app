import styled from "styled-components";

export const CardComponent = styled.div`
  width: 250px;
  height: 390px;
  border-radius: 8px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.2s;

  &:hover {
    filter: blur(1px);
    cursor: pointer;
  }
`;

export const CardWidgets = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
`;

export const CardImage = styled.img`
  max-width: 100%;
  max-height: 90%;
  position: absolute;
  top: 0;
  z-index: -1;
`;

export const CategoryChip = styled.div`
  background-color: red;
  border-radius: 10px;
  text-align: center;
  padding: 5px;
`;
