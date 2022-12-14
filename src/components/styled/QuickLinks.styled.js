import styled from "styled-components";

export const StyledQuickLinks = styled.div`
  margin: 3rem 0;

  h3 {
    font-size: 28px;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    margin: 2rem 0;

    a {
      color: white;
      font-weight: 600;
      font-size: 18px;

      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        margin: 0.5rem 0;
      }
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;
