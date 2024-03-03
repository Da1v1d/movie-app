import Slider from "react-slick";
import styled from "styled-components";

export const CarouselComponent = styled(Slider)`
  height: 100vh;

  .slick-next {
    right: 3%;
    width: 80px;
  }
  .slick-prev {
    width: 80px;
    left: 3%;
    z-index: 1;
  }

  .slick-next,
  .slick-prev {
    display: none;
  }

  .slick-next:before,
  .slick-prev:before {
    font-size: 80px;
    transition: all 0.2s;
    display: none;
  }
  .slick-list {
    height: 100%;
    .slick-track {
      height: 100%;
    }
  }
  .slick-slide {
    position: relative;
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
