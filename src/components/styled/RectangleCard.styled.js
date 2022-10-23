import styled from "styled-components";

export const StyledRectangleCard = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border: 0.2rem solid ${({ theme }) => theme.colors.border};
  border-radius: 1rem;
  margin-block: 1rem;
  padding: 2rem;

  header {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: ${({ theme, name }) =>
      name ? "none" : theme.colors.text};
    width: ${({ name }) => (name ? "13rem" : "6rem")};
    height: ${({ name }) => (name ? "10rem" : "6rem")};

    img {
      width: 100%;
      height: 100%;
      border-radius: 2rem;
      object-fit: cover;
    }
  }

  section {
    width: calc(100% - 6rem);
    margin-left: 2rem;

    h3 {
      font-size: 28px;
      margin-bottom: ${({ name }) => (name ? "2rem" : "0.5rem")};
    }

    a {
      color: ${({ theme }) => theme.colors.text};
    }
  }
`;
