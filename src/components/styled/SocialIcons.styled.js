import styled from "styled-components";

export const StyledSocialIcons = styled.ul`
  display: flex;
  align-items: center;
  justify-content: left;
  margin: 2rem 0;

  li {
    list-style: none;
  }

  a {
    border: 0.2rem solid ${({ theme }) => theme.colors.border};
    border-radius: 50%;
    color: #fff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    margin: 0.5rem;
    text-decoration: none;

    svg {
      width: 2rem;
      height: 2rem;
    }
  }
`;
