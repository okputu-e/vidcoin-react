import React from "react";
import { StyledHarmburger } from "../styled/Harmburger.styled";
import { Menu, Close } from "../helpers/Svgs";
export const Hamburger = ({ open, handleClick }) => {
  return (
    <StyledHarmburger>
      {open ? (
        <button onClick={handleClick}>
          <Close />
        </button>
      ) : (
        <button onClick={handleClick}>
          <Menu />
        </button>
      )}
    </StyledHarmburger>
  );
};
