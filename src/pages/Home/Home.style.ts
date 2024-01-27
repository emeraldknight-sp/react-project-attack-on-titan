import styled from "@emotion/styled";

export const StyledHome = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  z-index: 1;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    z-index: -1;
  }
`;


