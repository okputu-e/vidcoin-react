import styled from "styled-components";

export const Hero = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  gap: 1rem;

  & > div {
    width: 100%;
    margin: 5rem auto 2.5rem;

    &:nth-child(1) {
      h1,
      p {
        width: 90%;
        line-height: 1.4;

        @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
          width: 100%;
        }
      }

      h1 {
        margin: 2rem 0;
        font-size: 2.5rem;

        @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
          font-size: 1.5rem;
        }
      }

      p {
        margin: 2rem 0;
        font-size: 20px;
        font-weight: 500;
        @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
          font-size: 15px;
        }
      }

      div {
        button {
          &:nth-child(2) {
            margin-left: 2rem;
            @media (max-width: ${({ theme }) => theme.breakpoints.smobile}) {
              margin-left: 0;
            }
          }
          @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
            margin: 0.5rem 0;
          }
        }

        @media (max-width: ${({ theme }) => theme.breakpoints.smobile}) {
          display: grid;
          grid-template-columns: 1fr;
        }
      }
    }

    &:nth-child(2) {
      display: flex;
      justify-content: center;
      z-index: 4;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      margin: 2rem auto 0.5rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;
