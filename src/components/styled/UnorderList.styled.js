import styled from "styled-components";

export const UnorderList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: ${({ name }) => name && "center"};
  margin-bottom: ${({ name }) => name && "2rem"};
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    visibility: ${(props) => (props.open ? "visible" : "hidden")};
    opacity: ${(props) => (props.open ? 1 : 0)};
    display: grid;
    grid-template-columns: 1fr;
    position: absolute;
    z-index: 5;
    top: 0;
    left: 0;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.border};
    align-items: ${({ name }) => name && "flex-start"};
    padding: 5rem 0 2.5rem;
  }

  & > li {
    margin: 0 0.5rem;
    color: ${({ theme }) => theme.colors.border};

    &:not(:nth-child(1)) {
      list-style: disc;
      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        list-style: none;
      }
    }

    & > a {
      color: ${({ theme }) => theme.colors.text} !important;
      margin: 0 0.5rem;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      list-style: none;
      margin: 0.35rem 0;
      padding: 1rem 2rem;

      &:hover {
        background-color: ${({ theme }) => theme.colors.logo};
        padding-left: 3rem;
        transition: all 0.5s ease-in-out;
      }
    }
  }
`;
