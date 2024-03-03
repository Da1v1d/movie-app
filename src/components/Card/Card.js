import {
  CardComponent,
  CardImage,
  CardWidgets,
  CategoryChip,
} from "./Card.styled";

export const Card = () => {
  return (
    <CardComponent>
      <CardWidgets>
        <div>90 min</div>
        <div>8.0</div>
      </CardWidgets>
      <CardImage src={require("../../assets/images/poster-john-wick.png")} />
      <CardWidgets>
        <div>John Wick: Chapter 4</div>
        <CategoryChip>HD</CategoryChip>
      </CardWidgets>
    </CardComponent>
  );
};
