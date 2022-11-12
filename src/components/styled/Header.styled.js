import styled from "styled-components";
import { UpAndDown } from "./Animate.styled";

export const StyledHeader = styled.header`
  padding: 1rem 0 2rem;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div {
    &:nth-child(1) {
      z-index: 10;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
  }
`;

export const Image = styled.img`
  max-width: 90%;
  margin: 0 auto;
  animation: ${UpAndDown} 1s infinite alternate;
`;
