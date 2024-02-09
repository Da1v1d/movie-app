import { CarouselComponent } from "./Carousel.styled";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Carousel = ({ settings, items }) => {
  return (
    <CarouselComponent {...settings}>
      {/* {items.map((item, index) => (
        <div>{item}</div>
      ))} */}
      <img src={require('../../assets/images/preview.jpeg')}/>
      <div>2</div>
      <div>3</div>
      <div>3</div>
      <div>3</div>
      <div>3</div>
    </CarouselComponent>
  );
};
