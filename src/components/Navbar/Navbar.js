import { useLocation } from "react-router-dom";
import { NavbarComponent, NavbarLink } from "./Nvabar.styled";
import { Button } from "../Button/Button";

export const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <NavbarComponent>
      <Button icon="play" text="Watch now" />

      <div>
        <NavbarLink isActive={pathname === "/"} to={"/"}>
          Home
        </NavbarLink>
        <NavbarLink isActive={pathname === "/movies"} to={"/movies"}>
          Movies
        </NavbarLink>
        <NavbarLink isActive={pathname === "/tv"} to={"/tv"}>
          Tv-shows
        </NavbarLink>
        <NavbarLink isActive={pathname === "/sign"} to={"/sign"}>
          Sign in/up
        </NavbarLink>
      </div>
    </NavbarComponent>
  );
};
