import styled from "styled-components";

export const Hero = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  justify-content: center;
  gap: 1rem;

  & > div {
    width: 100%;
    margin: 5rem auto 2.5rem;
    /* border: 1px solid white; */

    &:nth-child(1) {
      h1,
      p {
        width: 90%;
        line-height: 1.4;
      }

      h1 {
        margin: 2rem 0;
        font-size: 2.5rem;
      }

      p {
        margin: 2rem 0;
        font-size: 20px;
        font-weight: 500;
      }

      div {
        button:nth-child(2) {
          margin-left: 2rem;
        }
      }
    }

    &:nth-child(2) {
      display: flex;
      justify-content: center;
    }
  }
`;
