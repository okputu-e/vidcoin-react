import styled from "styled-components";

export const StyledIframe = styled.iframe`
  width: 100%;
  height: 510px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  margin-bottom: 2rem;
`;
