import React from "react";
import { StyledCard } from "../styled/SquareCard.styled";

export default function SquareCard({ Icon, headingthree }) {
  return (
    <StyledCard>
      <header>
        <Icon />
      </header>

      <section>
        <h3>{headingthree}</h3>
      </section>

      <footer>
        <a href="/">Watch Video</a>
      </footer>
    </StyledCard>
  );
}
