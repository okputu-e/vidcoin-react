import { StyledHr } from "../styled/hr.styled";
import { Logo } from "../styled/Logo.styled";
import React from "react";
import { StyledFooter } from "../styled/Footer.styled";
import { Container } from "../styled/Container.styled";
import { UnorderList } from "../styled/UnorderList.styled";
import { StyledCopyright } from "../styled/Copyright.styled";
import SocialIcons from "../helpers/SocialIcons";
import Contact from "../helpers/Contact";
import QuickLinks from "../helpers/QuickLinks";
import Newsletter from "../helpers/Newsletter";

const lists = [
  { id: 1, item: "Home" },
  { id: 2, item: "Sell" },
  { id: 3, item: "Exchange Rate" },
  { id: 4, item: "Pricing" },
  { id: 5, item: "Services" },
  { id: 6, item: "About Us" },
];

export default function Footer() {
  const FooterList = lists.map((list) => {
    return (
      <li key={list.id}>
        <a href="/">{list.item}</a>
      </li>
    );
  });
  return (
    <StyledFooter>
      <Container>
        <StyledHr />
        <Logo>
          Vid<span>Coin</span>
        </Logo>
        <Newsletter />
        <QuickLinks />
        <Contact />
        <SocialIcons />
        <StyledHr />
        <UnorderList name="footer">{FooterList}</UnorderList>
        <StyledCopyright>Copyright; Vidicoin</StyledCopyright>
      </Container>
    </StyledFooter>
  );
}
