import * as MdIcon from "react-icons/md";
import { Button } from "../Button";
import { Container } from "../Container";
import { MenuContext } from "../../context/MenuContext";
import { MouseEvent, useContext } from "react";
import { StyledMenu } from "./Menu.style";
import { menuOptions } from "../../mock/menuOptions.mock";

export const Menu = () => {
  const { openMenu } = useContext(MenuContext);

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    return;
  };

  const menuConfig = [
    {
      id: 1,
      icon: <MdIcon.MdSearch size={24} />,
      text: "Digite sua busca",
      url: "/",
    },
    {
      id: 2,
      icon: <MdIcon.MdNotificationsNone size={24} />,
      text: "Notificações",
      url: "/",
    },
    {
      id: 3,
      icon: <MdIcon.MdInsertEmoticon size={24} />,
      text: "Meu perfil",
      url: "/",
    },
  ];

  return (
    <StyledMenu role="navigation" openMenu={openMenu}>
      <Container className="menu__container">
        <ul className="menu__list">
          {menuOptions.map((option, index) => (
            <li key={index} className="menu__item">
              <a
                href={option.link}
                onClick={handleClick}
                aria-label={`clique aqui para ${option.description}`}
                className={`menu__link ${option.name === "Filmes" ? "selected" : ""}`}
              >
                {option.name}
              </a>
            </li>
          ))}
        </ul>
        <ul className="menu__list">
          {menuConfig.map((config, index) => (
            <li key={index} className="menu__item">
              <Button
                size="sm"
                ariaLabel="search"
                rounded="full"
                className="menu__button"
                onClick={() => console.log("Click", config.text)}
              >
                {config.icon} <span>{config.text}</span>
              </Button>
            </li>
          ))}
        </ul>
      </Container>
    </StyledMenu>
  );
};
