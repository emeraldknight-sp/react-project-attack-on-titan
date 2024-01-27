import styled from "@emotion/styled";

export const StyledContainer = styled.div`
  max-width: 90vw;
  margin: 0 auto;
  padding: 1rem 0;

  @media (min-width: 768px) {
    max-width: 85vw;
  }

  @media (min-width: 1024px) {
    max-width: 80vw;
  }
`;
