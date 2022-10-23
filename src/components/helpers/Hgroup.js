import React from "react";
import { StyledHgroup } from "../styled/Hgroup.styled";

export default function Hgroup({ HeadingTwo, SubHeadingTwo }) {
  return (
    <StyledHgroup>
      <h2>{HeadingTwo}</h2>
      {SubHeadingTwo && <p>{SubHeadingTwo}</p>}
    </StyledHgroup>
  );
}
