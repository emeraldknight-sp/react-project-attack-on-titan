import { MouseEvent } from "react";
import { BsSearch } from "react-icons/bs";
import { StyledHeader, StyledLogo } from "./Header.style";
import { IconButton } from "../../components/buttons/IconButton";
import { menuOptions } from "../../mock/menuOptions.mock";
import Logo from "../../assets/transparent-logo.webp";
import { Container } from "../Container";

export const Header = () => {
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
            aria-label="clique para voltar à página inicial"
          >
            <img src={Logo} alt="logotipo" width={65} />
            <h1>AttackVision</h1>
          </a>
        </StyledLogo>
        <nav className="header__nav" role="navigation">
          <ul className="header__nav--list">
            {menuOptions.map((option, index) => (
              <li key={index} className="header__nav--item">
                <a
                  href={option.link}
                  onClick={handleClick}
                  aria-label={`clique aqui para ${option.description}`}
                >
                  {option.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <IconButton
          size="md"
          color="transparent"
          type="button"
          variant="text"
          ariaLabel="search"
        >
          <BsSearch size={24} />
        </IconButton>
      </Container>
    </StyledHeader>
  );
};
