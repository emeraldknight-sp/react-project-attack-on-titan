import styled from "@emotion/styled";
import { Container } from "../Container";

export const StyledMain = styled.main`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem 0;
  flex: 1;
`;

export const ContainerMain = styled(Container)`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 32px;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;
