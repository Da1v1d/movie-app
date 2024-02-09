import Slider from "react-slick";
import styled from "styled-components";

export const CarouselComponent = styled(Slider)`
  height: 100vh;

  .slick-next {
    right: 3%;
  }
  .slick-prev {
    left: 3%;
  }

  .slick-next,
  .slick-prev {
    width: 60px;
    height: 60px;
    background-color: white;
    opacity: 0.7;
    border-radius: 50%;
  }

  .slick-next:before,
  .slick-prev:before {
    all: unset;
  }
  .slick-list {
    height: 100%;
    z-index: -1;
    .slick-track {
      height: 100%;
    }
  }
  .slick-dots {
    bottom: 30px;
    li button:before {
      opacity: 1;
      color: white;
      font-size: 20px;
    }
    li button:hover {
      opacity: 0.8;
    }
    .slick-active {
      button:before {
        color: red !important;
        animation: dot 0.4s;
      }

      @keyframes dot {
        0% {
          font-size: 0;
        }
        100% {
          font-size: 20px;
        }
      }
    }
  }
`;
