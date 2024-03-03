import { CarouselComponent } from "./Carousel.styled";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Carousel = ({ settings, children }) => {
  return <CarouselComponent {...settings}>{children}</CarouselComponent>;
};
