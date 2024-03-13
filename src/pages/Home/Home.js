import { Card } from "../../components/Card/Card";
import { TopMoviesCarousel } from "../../components/Carousel/TopMoviesCarousel";
import { usePreview } from "../../hooks/usePreview";
import { Container } from "./Home.styled";

export const Home = () => {

  return (
    // <Container>

    // </Container>
    <>
      <TopMoviesCarousel />
      <Card></Card>
    </>
  );
};
