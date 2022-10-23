import React from "react";
import Hgroup from "../helpers/Hgroup";
import { TimeLeft, Enter, Check, AddUser } from "../helpers/Svgs";
import { Container } from "../styled/Container.styled";
import RectangleCard from "../helpers/RectangleCard";
import { StyledSection } from "../styled/Section.styled";

const Lists = [
  {
    id: 1,
    Icon: AddUser,
    headingthree: "Create Account",
  },
  {
    id: 2,
    Icon: Check,
    headingthree: "Verify Account",
  },
  {
    id: 3,
    Icon: Enter,
    headingthree: "Submit Video",
  },

  {
    id: 4,
    Icon: TimeLeft,
    headingthree: "Video approval and crypto released",
  },
];

export default function Instructions() {
  const InstructionList = Lists.map((list) => {
    return <RectangleCard key={list.id} {...list} />;
  });

  return (
    <StyledSection>
      <Container>
        <Hgroup HeadingTwo="How it Works" SubHeadingTwo="It just got easier" />
        {InstructionList}
      </Container>
    </StyledSection>
  );
}
