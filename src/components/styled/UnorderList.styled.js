import styled from "styled-components";

export const UnorderList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: ${({ name }) => name && "center"};
  margin-bottom: ${({ name }) => name && "2rem"};
  align-items: center;

  & > li {
    margin: 0 0.5rem;
    color: ${({ theme }) => theme.colors.border};

    &:not(:nth-child(1)) {
      list-style: disc;
    }
    & > a {
      color: ${({ theme }) => theme.colors.text} !important;
      margin: 0 0.5rem;
    }
  }
`;
