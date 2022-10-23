import styled from "styled-components";

export const StyledHr = styled.hr`
  margin: 1.5rem 0;
  border: 0.1rem solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.border};
`;
