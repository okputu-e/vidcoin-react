import styled from "styled-components";
import { Pulse } from "./Animate.styled";

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  padding-block: 2rem;
  margin-bottom: 1rem;
  border: 0.2rem solid ${({ theme }) => theme.colors.border};

  header {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.text};
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    margin: 1rem auto;
    box-shadow: 0px 0px 1px 1px #0000001a;
    animation: ${Pulse} 1s infinite;
  }

  section {
    h3 {
      font-size: 24px;
      font-weight: 600;
    }
  }

  footer {
    margin-block: 1rem;

    a {
      color: inherit;
    }
  }
`;
