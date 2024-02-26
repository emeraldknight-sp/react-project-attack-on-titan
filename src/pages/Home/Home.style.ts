import styled from "@emotion/styled";

export const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
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

  @media (min-width: 375px) {
    height: 100vh;
  }
`;

export const StyledDetailsSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 28px;

  .details__list-genres {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px;
  }

  .details__genre {
    font-family: var(--text-content);
    font-size: var(--text-xs);
    font-weight: 600;
    line-height: var(--line-height-xs);
    color: white;
    background-color: transparent;
    border: 1px solid white;
    border-radius: var(--rounded-md);
    padding: 4px 8px;
  }

  .details__title {
    font-family: var(--text-title);
    font-size: var(--text-4xl);
    font-weight: 600;
    line-height: var(--line-height-4xl);
    text-transform: uppercase;
    color: white;
  }

  .details__description {
    font-family: var(--text-content);
    font-size: var(--text-md);
    font-weight: 400;
    line-height: var(--line-height-md);
    color: white;
  }

  .details__group-details {
    display: flex;
    flex-direction: column;
    gap: 44px;
    width: 100%;
  }

  .details__average {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 24px;
    flex: 1;
  }

  .details__average div {
    display: flex;
    flex-direction: column;
    gap: 8px;
    color: white;
  }

  .details__average div p:nth-child(1) {
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
      border-radius: var(--rounded-xs);
    }
  }

  .details__average div p:nth-child(2) {
    font-size: var(--text-5xl);
    font-family: var(--text-content);
    font-weight: 600;
    line-height: var(--line-height-5xl);
  }

  .details__average svg {
    font-size: 100px;
    color: var(--secondary-color);
  }

  .details__group-button {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px;
  }

  .details__link {
    text-decoration: none;
    outline: none;
  }

  @media (min-width: 768px) {
    .details__title {
      font-size: var(--text-5xl);
      line-height: var(--line-height-5xl);
    }

    .details__description {
      font-size: var(--text-lg);
      line-height: var(--line-height-lg);
    }

    .details__genre {
      font-size: var(--text-md);
      line-height: var(--line-height-md);
      padding-inline: 16px;
    }

    .details__group-button {
      margin-top: 32px;
    }
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
