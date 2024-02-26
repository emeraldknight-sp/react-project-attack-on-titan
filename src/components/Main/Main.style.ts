import styled from "@emotion/styled";
import { Container } from "../Container";

export const StyledMain = styled.main`
  padding: 1rem 0;
  flex: 1;
`;

export const ContainerMain = styled(Container)`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 100px;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;
