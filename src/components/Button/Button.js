import { Link } from "react-router-dom";
import { ButtonComponent } from "./Button.styled";

/**
 *
 * @param {icon} 'play' | 'later'
 * @param {variant} 'filled' | 'outlined'
 *
 */

export const Button = ({
  onClick,
  icon = null,
  variant = "filled",
  text,
  to = null,
  ...props
}) => {
  return (
    <ButtonComponent
      as={to ? Link : null}
      onClick={onClick}
      variant={variant}
      to={to}
      {...props}
    >
      <p> {text}</p>
      {icon && (
        <img width="23" src={require(`../../assets/icons/${icon}.png`)} />
      )}
    </ButtonComponent>
  );
};
