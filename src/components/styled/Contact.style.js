import styled from "styled-components";

export const StyledContact = styled.address`
  font-style: normal;
  margin-top: 4rem;

  h3 {
    font-size: 28px;
  }

  p {
    margin: 1rem 0;
    font-size: 20px;
    a {
      color: white;
    }

    span {
      color: ${({ theme }) => theme.colors.logo};
    }
  }
`;
