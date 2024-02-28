import * as MdIcon from "react-icons/md";
import Logo from "../../assets/logo.webp";
import { Button } from "../Button";
import { ContainerHeader, StyledHeader, StyledLogo } from "./Header.style";
import { Menu } from "../Menu";
import { MenuContext } from "../../context/MenuContext";
import { MouseEvent, useContext, useEffect, useState } from "react";

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
      <ContainerHeader>
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
          <Button
            size="sm"
            rounded="full"
            ariaLabel="click to open menu sidebar"
            onClick={handleOpenMenu}
          >
            {openMenu ? (
              <MdIcon.MdClose size={24} />
            ) : (
              <MdIcon.MdMenu size={24} />
            )}
          </Button>
        )}
      </ContainerHeader>
    </StyledHeader>
  );
};
