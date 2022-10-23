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
    margin-right: 2rem;
    height: 5rem;
    width: 5rem;
    text-decoration: none;

    svg {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
`;
