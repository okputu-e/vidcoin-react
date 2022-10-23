import React from "react";
import Hgroup from "../helpers/Hgroup";
import Iframe from "../helpers/Iframe";
import { Container } from "../styled/Container.styled";
import { StyledSection } from "../styled/Section.styled";

export default function UseVidcoin() {
  return (
    <StyledSection>
      <Container>
        <Hgroup HeadingTwo="How to use VidCoin" SubHeadingTwo="Watch Video" />
        <Iframe />
      </Container>
    </StyledSection>
  );
}
