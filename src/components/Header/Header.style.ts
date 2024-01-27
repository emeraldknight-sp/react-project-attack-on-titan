import styled from "@emotion/styled";

export const StyledHeader = styled.header`
  .header__container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .header__nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;
  }

  .header__nav--list {
    display: flex;
    gap: 2rem;
  }

  .header__nav--item {
    a {
      position: relative;
      font-family: var(--text-content);
      color: rgba(0, 0, 0, 0.5);
      font-weight: 600;
      padding: 0 0 6px;
      transition: color 0.3s ease;

      &:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 20px;
        height: 5px;
        background-color: var(--primary-color);
        border-radius: 10px;
        opacity: 0;
        transition: opacity 0.3s ease;
      }

      &:hover {
        color: black;

        &:after {
          opacity: 1;
        }
      }
    }
  }
`;

export const StyledLogo = styled.figure`
  a {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  h1 {
    font-size: var(--text-3xl);
    font-family: var(--text-title);
    font-weight: 600;
    line-height: var(--line-height-3xl);
    text-transform: uppercase;
    letter-spacing: 1px;
    color: black;
  }
`;
