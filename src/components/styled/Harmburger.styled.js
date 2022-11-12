import styled from "styled-components";

export const StyledHarmburger = styled.div`
  z-index: 6;
  button {
    padding: 0.5rem;
    background-color: transparent;
    border: none;
    display: none;

    svg {
      fill: ${({ theme }) => theme.colors.text};
      width: 1.7rem;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      display: block;
    }
  }
`;
