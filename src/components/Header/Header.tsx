import * as MdIcon from "react-icons/md";
import Logo from "../../assets/logo.png";
import { Container } from "../Container";
import { IconButton } from "../../components/buttons/IconButton";
import { Menu } from "../Menu";
import { MouseEvent, useContext, useEffect, useState } from "react";
import { StyledHeader, StyledLogo } from "./Header.style";
import { MenuContext } from "../../context/MenuContext";

export const Header = () => {
  const [viewport, setViewport] = useState(window.innerWidth);
  const { openMenu, handleOpenMenu } = useContext(MenuContext);

  const viewportDesktop = 1023;

  const updateViewport = () => {
    setViewport(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateViewport);

    return () => {
      window.removeEventListener("resize", updateViewport);
    };
  }, []);

  const handleClick = (event: MouseEvent) => {
    event.preventDefault();
    return;
  };

  return (
    <StyledHeader>
      <Container className="header__container">
        <StyledLogo>
          <a
            href="/"
            onClick={handleClick}
            className="logo__link"
            aria-label="clique para voltar à página inicial"
          >
            <img src={Logo} alt="logotipo cineverse" width={40} />
            <h1 className="logo__title">CineVerse</h1>
          </a>
        </StyledLogo>
        <Menu />
        {viewport > viewportDesktop ? (
          <></>
        ) : (
          <IconButton
            size="sm"
            color="transparent"
            variant="text"
            ariaLabel="click to open menu sidebar"
            onClick={handleOpenMenu}
          >
            {openMenu ? (
              <MdIcon.MdClose size={24} />
            ) : (
              <MdIcon.MdMenu size={24} />
            )}
          </IconButton>
        )}
      </Container>
    </StyledHeader>
  );
};
