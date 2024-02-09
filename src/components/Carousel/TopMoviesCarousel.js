import { Button } from "../Button/Button";
import { Carousel } from "./Carousel";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  draggable: false,
};

const movies = [
  {
    name: "Avatar",
    year: "2008",
    duration: "90min",
    rating: 8.75,
  },
  {
    name: "Avatar",
    year: "2008",
    duration: "90min",
    rating: 8.75,
  },
  {
    name: "Avatar",
    year: "2008",
    duration: "90min",
    rating: 8.75,
  },
  {
    name: "Avatar",
    year: "2008",
    duration: "90min",
    rating: 8.75,
  },
  {
    name: "Avatar",
    year: "2008",
    duration: "90min",
    rating: 8.75,
  },
];

export const TopMoviesCarousel = () => {
  return (
    <Carousel settings={settings} items={movies}>
    </Carousel>
  );
};
