import styled from "styled-components";

export const Logo = styled.a`
  display: block;
  font-size: 2rem;

  & > span {
    color: ${({ theme }) => theme.colors.logo};
  }
`;
