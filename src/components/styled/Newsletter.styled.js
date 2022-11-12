import styled from "styled-components";

export const StyledNewsletter = styled.section`
  margin: 3rem 0;
  h3 {
    font-size: 25px;
  }

  form {
    width: 100%;
    display: grid;
    grid-template-columns: 80% 20%;
    margin: 1rem 0;
    font-family: inherit;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      grid-template-columns: 70% 30%;
    }

    input,
    button {
      padding: 1rem 0;
      border: none;
      font-size: 20px;

      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 13px;
      }
    }

    input {
      border-radius: 0.5rem 0 0 0.5rem;
      outline: none;
      padding-left: 0.5rem;
    }

    button {
      background-color: #4d8af0;
      color: white;
      font-weight: 400;
      border-radius: 0 0.5rem 0.5rem 0;
    }
  }
`;
