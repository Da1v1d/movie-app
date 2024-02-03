import { Carousel } from "./Carousel";

export const TopMoviesCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return <Carousel settings={settings}></Carousel>;
};
