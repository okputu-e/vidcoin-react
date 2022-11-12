import styled from "styled-components";

export const StyledHgroup = styled.hgroup`
  margin: 0 0 2rem;
  h2 {
    font-size: 36px;
    font-weight: 600;
    margin-bottom: 1rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: 20px;
    }
  }

  p {
    font-size: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: 15px;
    }
  }
`;
