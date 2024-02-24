import { menuOptions } from "../../mock/menuOptions.mock";
import { Container } from "../Container";
import { StyledMenu } from "./Menu.style";

export const Menu = ({ openMenu }: { openMenu: boolean }) => {
  const handleClick = (event: MouseEvent) => {
    event.preventDefault();
    return;
  };

  return (
    <StyledMenu role="navigation" openMenu={openMenu}>
      <Container>
        <ul className="menu__list">
          {menuOptions.map((option, index) => (
            <li key={index} className="menu__item">
              <a
                href={option.link}
                onClick={() => handleClick}
                aria-label={`clique aqui para ${option.description}`}
                className="menu__link"
              >
                {option.name}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </StyledMenu>
  );
};
