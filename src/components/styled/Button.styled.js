import styled from "styled-components";

export const Button = styled.button`
  border: 1px solid ${({ bg }) => bg || "#547bc0"};
  border-radius: 1rem;
  padding: 1rem 4rem;
  background: ${({ bg }) => bg || "none"};
  color: ${({ theme }) => theme.colors.text};
  font-weight: 700;
  font-size: 18px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;
