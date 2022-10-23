import styled from "styled-components";

export const StyledNewsletter = styled.section`
  margin: 3rem 0;
  h3 {
    font-size: 28px;
  }

  form {
    width: 100%;
    display: grid;
    grid-template-columns: 80% 20%;
    margin: 1rem 0;
    font-family: inherit;

    input,
    button {
      padding: 1.5rem 1rem;
      border: none;
      font-size: 24px;
    }

    input {
      border-radius: 0.5rem 0 0 0.5rem;
      outline: none;
    }

    button {
      background-color: #4d8af0;
      color: white;
      font-weight: 600;

      border-radius: 0 0.5rem 0.5rem 0;
    }
  }
`;
