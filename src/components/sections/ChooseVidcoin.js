import React from "react";
import Hgroup from "../helpers/Hgroup";
import { Container } from "../styled/Container.styled";
import { Grid } from "../styled/Grid.styled";
import SquareCard from "../helpers/SquareCard";
import { Verified, LifeInsurance, Wallet } from "../helpers/Svgs";
import { StyledSection } from "../styled/Section.styled";

const Lists = [
  {
    id: 1,
    Icon: Verified,
    headingthree: "Security",
  },
  {
    id: 2,
    Icon: Wallet,
    headingthree: "Secure Wallet",
  },
  {
    id: 3,
    Icon: LifeInsurance,
    headingthree: "Insurance",
  },
];

export default function ChooseVidcoin() {
  const CardList = Lists.map((list) => {
    return <SquareCard key={list.id} {...list} />;
  });

  return (
    <StyledSection>
      <Container>
        <Hgroup
          HeadingTwo="Why choose VidCoin ?"
          SubHeadingTwo="VidCoin makes it easy to convert your video into crypto"
        />
        <Grid>{CardList}</Grid>
      </Container>
    </StyledSection>
  );
}
