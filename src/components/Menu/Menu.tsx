import * as MdIcon from "react-icons/md";
import UserProfile from "../../assets/image/user.webp";
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
      icon: <MdIcon.MdSearch className="menu__icon" size={24} />,
      text: "Digite sua busca",
      url: "/",
    },
    {
      id: 2,
      icon: <MdIcon.MdNotificationsNone className="menu__icon" size={24} />,
      text: "Notificações",
      url: "/",
    },
    {
      id: 3,
      img: UserProfile,
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
                className={`menu__link ${option.name === "Desenhos" ? "selected" : ""}`}
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
                ariaLabel={`clique aqui para acessar ${config.text}`}
                rounded="full"
                className="menu__button"
              >
                {!config.icon ? (
                  <img
                    src={config.img}
                    className="menu__button--icon"
                    alt="foto de usuário"
                  />
                ) : (
                  config.icon
                )}
                <span className="menu__button--text">{config.text}</span>
              </Button>
            </li>
          ))}
        </ul>
      </Container>
    </StyledMenu>
  );
};
