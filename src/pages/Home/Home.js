import { usePreview } from "../../hooks/usePreview";
import { Container } from "./Home.styled";

export const Home = () => {
  // const { previewRef, setPreview } = usePreview(
  //   "../assets/images/preview.jpeg"
  // );

  return (
    <Container
      // style={{
      //   backgroundImage: `url(${require("../../assets/images/preview.jpeg")})`,
      // }}
      ref={previewRef}
    ></Container>
  );
};
