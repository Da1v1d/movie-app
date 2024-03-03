import { Fragment } from "react";
import { Button } from "../../Button/Button";
import { Carousel } from "../Carousel/Carousel";
import { WatchNowButton } from "./index.styled";

const settings = {
  dots: true,
  infinite: true,
  speed: 700,
  slidesToShow: 1,
  slidesToScroll: 1,
  draggable: true,
};

const movies = [
  {
    name: "Avatar",
    year: "2008",
    duration: "90min",
    rating: 8.75,
    id: 1,
  },
  {
    name: "Avatar",
    year: "2008",
    duration: "90min",
    rating: 8.75,
    id: 1,
  },
  {
    name: "Avatar",
    year: "2008",
    duration: "90min",
    rating: 8.75,
    id: 1,
  },
  {
    name: "Avatar",
    year: "2008",
    duration: "90min",
    rating: 8.75,
    id: 1,
  },
  {
    name: "Avatar",
    year: "2008",
    duration: "90min",
    rating: 8.75,
    id: 1,
  },
];

export const TopMoviesCarousel = () => {
  return (
    <Carousel settings={settings}>
      {movies.map((item, index) => (
        <Fragment key={index}>
          <div
            key={index}
            style={{
              backgroundImage: `url(${require("../../../assets/images/preview.jpeg")})`,
              backgroundRepeat: "no-repeat",
              height: "80vh",
              maxHeight: "1200px",
              backgroundPosition: "50% 25%",
              zIndex: -1,
            }}
          />
          <WatchNowButton
            icon="play"
            text="Watch now"
            to={`/movie/${item.id}`}
          />
        </Fragment>
      ))}
    </Carousel>
  );
};
