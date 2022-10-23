import React from "react";
import { StyledRectangleCard } from "../styled/RectangleCard.styled";

export default function RectangleCard({ Icon, headingthree, image, name }) {
  return (
    <StyledRectangleCard name={name}>
      <header>
        {Icon && <Icon />}{" "}
        {image && <img src={require("../../assets/" + image)} alt="" />}
      </header>
      <section>
        <h3>{headingthree}</h3>
        <a href="/">
          {Icon && "Watch Video"} {image && "Learn More"}
        </a>
      </section>
    </StyledRectangleCard>
  );
}
