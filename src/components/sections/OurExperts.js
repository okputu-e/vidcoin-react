import React from "react";
import Hgroup from "../helpers/Hgroup";
import { Container } from "../styled/Container.styled";
import { Grid } from "../styled/Grid.styled";
import ImgCard from "../helpers/ImgCard";
import { StyledSection } from "../styled/Section.styled";
import { StyledHr } from "../styled/hr.styled";

const Lists = [
  {
    id: 1,
    image: "rafiu.png",
    name: "Rafiu Sado   ",
    title: "UI/UX Designer",
  },
  {
    id: 2,
    image: "redd.jpg",
    name: "Okputu Emmanuel",
    title: "Frontend Developer",
  },

  {
    id: 3,
    image: "mike.jpg",
    name: "Michael Oduah",
    title: "Backend Developer",
  },
];

export default function OurExperts() {
  const ExpertList = Lists.map((list) => {
    return <ImgCard key={list.id} {...list} />;
  });
  return (
    <StyledSection>
      <Container>
        <Hgroup HeadingTwo="Our Experts" SubHeadingTwo="Watch Video" />
        <Grid>{ExpertList}</Grid>
        <StyledHr />
      </Container>
    </StyledSection>
  );
}
