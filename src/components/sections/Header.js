import React from "react";
import { Container } from "../styled/Container.styled";
import { Logo } from "../styled/Logo.styled";
import { StyledHeader, Nav, Image } from "../styled/Header.styled";
import { UnorderList } from "../styled/UnorderList.styled";
import { Hero } from "../styled/Hero.styled";
import { Button } from "../styled/Button.styled";
import HeroImg from "../../assets/svg/7898564_play_bookmarks_icon 1.svg";
import { Hamburger } from "../helpers/Harmburger";

const lists = [
  { id: 1, item: "Sell" },
  { id: 2, item: "Exchange Rate" },
  { id: 3, item: "Pricing" },
  { id: 4, item: "Services" },
  { id: 5, item: "About Us" },
];

export default function Header() {
  const [isOpen, setisOpen] = React.useState(false);

  function handleClick() {
    setisOpen((prev) => !prev);
  }

  const NavList = lists.map((list) => {
    return (
      <li key={list.id}>
        <a href="/">{list.item}</a>
      </li>
    );
  });

  return (
    <StyledHeader>
      <Container>
        <Nav>
          <div>
            <Logo>
              Vid<span>Coin</span>
            </Logo>
          </div>
          <Hamburger open={isOpen} handleClick={handleClick} />
          <UnorderList open={isOpen}>{NavList}</UnorderList>
        </Nav>
        <Hero>
          <div>
            <h1>
              Exchange your Promo video for <span>VidCoin</span>
            </h1>
            <p>
              VidCoin allows you to exchange your high converting Promo video
              for a coin with higher value. Go to Exchange rate to view the
              value of your video and also continue this Journey with us by
              Signing Up - Offer ends in 24hrs
            </p>
            <div>
              <Button bg="#6C63FF">Sign up</Button>
              <Button>Sign in</Button>
            </div>
          </div>
          <div>
            <Image src={HeroImg} />
          </div>
        </Hero>
      </Container>
    </StyledHeader>
  );
}
