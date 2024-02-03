import Slider from "react-slick";
import styled from "styled-components";

export const CarouselComponent = styled(Slider)`
  .slick-dots {
    li button:before {
      opacity: 1;
      color: white;
      font-size: 20px;
    }
    .slick-active {
      width: unset;
    }
  }
  .slick-active {
    button {
      width: 50px;
    }
    button:before {
      opacity: 1;
      content: "";
      background-color: red;
      border-radius: 12px;
      width: 50px;
      height: 12px;
      top: 15%;
    }
  }
`;
