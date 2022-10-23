import styled from "styled-components";

export const StyledImgCard = styled.div`
  width: 220px;
  margin: 0 auto 1rem;

  header {
    border-radius: 2rem;
    margin-bottom: 1rem;

    img {
      border-radius: inherit;
      object-fit: cover;
    }
  }

  section {
    h3 {
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    p {
      font-size: 20px;
    }
  }
`;
