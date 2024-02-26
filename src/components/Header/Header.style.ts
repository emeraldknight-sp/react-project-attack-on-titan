import styled from "@emotion/styled";
import { Container } from "../Container";

export const StyledHeader = styled.header`
  color: white;
  padding: 1rem 0;
`;

export const ContainerHeader = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const StyledLogo = styled.figure`
  .logo__link {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    text-decoration: none;
    gap: 8px;
    outline: none;
  }

  .logo__title {
    font-size: var(--text-3xl);
    font-family: var(--text-title);
    font-weight: 600;
    color: white;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;
