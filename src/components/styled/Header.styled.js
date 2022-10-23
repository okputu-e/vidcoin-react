import styled from "styled-components";
import { UpAndDown } from "./Animate.styled";

export const StyledHeader = styled.header`
  padding: 2rem 0;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Image = styled.img`
  max-width: 90%;
  margin: 0 auto;
  animation: ${UpAndDown} 1s infinite alternate;
`;
