import styled from "@emotion/styled";

export const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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
    background: rgba(0, 0, 0, 0.6);
    z-index: -1;
  }

  .main {
    padding: 2rem 0;
    flex: 1;
  }

  .main__container {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 100px;
  }

  .group-button {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
  }

  @media (min-width: 1024px) {
    height: 100vh;

    .main__container,
    .group-button {
      flex-direction: row;
    }

    .group-button {
      margin-top: 32px;
    }
  }
`;

export const StyledDetailsSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 40px;

  .details__list-genres {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px;
  }

  .details__genre {
    font-family: var(--text-content);
    font-size: var(--text-md);
    font-weight: 600;
    line-height: var(--line-height-md);
    color: white;
    background-color: transparent;
    border: 1px solid white;
    border-radius: 16px;
    padding: 4px 16px;
  }

  .details__title {
    font-family: var(--text-title);
    font-size: var(--text-5xl);
    font-weight: 600;
    line-height: var(--line-height-5xl);
    text-transform: uppercase;
    color: white;
  }

  .details__description {
    font-family: var(--text-content);
    font-size: var(--text-lg);
    font-weight: 400;
    line-height: var(--line-height-lg);
    color: white;
  }

  .details__average {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 24px;

    div {
      display: flex;
      flex-direction: column;
      gap: 8px;
      color: white;

      p:nth-child(1) {
        font-size: var(--text-2xl);
        font-family: var(--text-content);
        font-weight: 600;
        line-height: var(--line-height-2xl);

        span {
          font-size: var(--text-xl);
          line-height: var(--line-height-xl);
          background-color: var(--secondary-color);
          color: black;
          padding: 2px 8px;
          border: none;
          border-radius: 4px;
        }
      }

      p:nth-child(2) {
        font-size: var(--text-5xl);
        font-family: var(--text-content);
        font-weight: 600;
        line-height: var(--line-height-5xl);
      }
    }
  }

  .details__average svg {
    font-size: 100px;
    color: var(--secondary-color);
  }
`;

export const StyledTeaserTrailerSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  gap: 32px;

  .iframe__container {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%;
    height: 0;
  }

  .iframe__container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  @media (min-width: 1024px) {
    width: 45%;
  }
`;
