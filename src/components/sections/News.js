import React from "react";
import { Container } from "../styled/Container.styled";
import Hgroup from "../helpers/Hgroup";
import RectangleCard from "../helpers/RectangleCard";
import { StyledSection } from "../styled/Section.styled";

const Lists = [
  {
    id: 1,
    image: "news (1).jpg",
    headingthree: "Wait for your video approval,then crypto is released",
  },
  {
    id: 2,
    image: "news (2).jpg",
    headingthree: "Wait for your video approval,then crypto is released",
  },
  {
    id: 3,
    image: "news (3).jpg",
    headingthree: "Wait for your video approval,then crypto is released",
  },
];

export default function News() {
  const NewsList = Lists.map((list) => {
    return <RectangleCard key={list.id} {...list} name="image" />;
  });

  return (
    <StyledSection>
      <Container>
        <Hgroup HeadingTwo="News" />
        {NewsList}
      </Container>
    </StyledSection>
  );
}
