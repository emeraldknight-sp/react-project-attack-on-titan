import styled from "@emotion/styled";

interface StyledMenuProps {
  openMenu: boolean;
}

export const StyledMenu = styled.nav<StyledMenuProps>`
  position: fixed;
  top: 11vh;
  left: 0;

  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 1rem 0;

  transition: all 0.3s ease-in;

  ${(props) =>
    props.openMenu
      ? `
      transform: translateX(0);
      opacity: 1;
    `
      : `
      transform: translateX(-100%);
      opacity: 0;
    `}

  .menu__list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .menu__item {
    font-family: var(--text-content);
    font-size: var(--text-lg);
    font-weight: 600;
    line-height: var(--line-height-lg);
  }

  .menu__link {
    position: relative;
    color: rgba(225, 225, 225, 0.7);
    text-decoration: none;
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
      color: white;

      &:after {
        opacity: 1;
      }
    }
  }

  @media (min-width: 1024px) {
    position: static;
    background-color: transparent;
    transform: none;
    opacity: unset;

    .menu__list {
      flex-direction: row;
      justify-content: center;
    }
  }
`;
