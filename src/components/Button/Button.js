import { ButtonComponent } from "./Button.styled";

/**
 *
 * @param {icon} 'play' | 'later'
 *
 */

export const Button = ({ onClick, icon = null, variant = "filled", text }) => {
  return (
    <ButtonComponent onClick={onClick} variant={variant}>
      <p> {text}</p>
      {icon && (
        <img width="23" src={require(`../../assets/icons/${icon}.png`)} />
      )}
    </ButtonComponent>
  );
};
