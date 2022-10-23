import { StyledImgCard } from "../styled/ImgCard.styled";

import React from "react";

export default function ImgCard({ image, name, title }) {
  return (
    <StyledImgCard>
      <header>
        <img src={require("../../assets/" + image)} alt="" />
      </header>
      <section>
        <h3>{name}</h3>
        <p>{title}</p>
      </section>
    </StyledImgCard>
  );
}
