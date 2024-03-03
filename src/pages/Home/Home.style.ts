import styled from "@emotion/styled";
import { Button } from "../../components/Button";

export const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 100vh;
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
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 28px;
`;

export const StyledDetailsSection = styled(Section)`
  .details__list-genres {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px;
  }

  .details__season,
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

  .details__average--icon {
    font-size: 100px;
    color: var(--secondary-color);
  }

  .details__average--content {
    display: flex;
    flex-direction: column;
    gap: 8px;
    color: white;
  }

  .details__average--label {
    font-size: var(--text-2xl);
    font-family: var(--text-content);
    font-weight: 600;
    line-height: var(--line-height-2xl);
  }

  .details__average--label-source {
    font-size: var(--text-xl);
    line-height: var(--line-height-xl);
    background-color: var(--secondary-color);
    color: black;
    padding: 2px 8px;
    border: none;
    border-radius: var(--rounded-xs);
  }

  .details__average--score {
    font-size: var(--text-5xl);
    font-family: var(--text-content);
    font-weight: 600;
    line-height: var(--line-height-5xl);
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

    .details__season,
    .details__genre {
      font-size: var(--text-md);
      line-height: var(--line-height-md);
      padding-inline: 16px;
    }

    .details__group-button {
      margin-top: 32px;
    }
  }

  @media (min-width: 1024px) {
    max-width: 50%;
  }

  @media (min-width: 1440px) {
    max-width: 65%;
  }
`;

export const StyledTeaserTrailerSection = styled(Section)`
  justify-content: space-evenly;
  width: 100%;

  @media (min-width: 1024px) {
    max-width: 36%;
  }

  @media (min-width: 1440px) {
    max-width: 26%;
  }
`;

export const StyledModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--tertiary-color);

  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
`;

export const StyledModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  background-color: rgba(0, 0, 0, 0.8);
  max-width: 288px;
  border-radius: var(--rounded-xs);
  color: white;

  font-size: var(--text-md);
  font-family: var(--text-content);
  font-weight: 400;
  line-height: var(--line-height-md);
  text-align: center;

  .modal__answer {
    padding: 2rem;
  }

  .modal__button-group {
    display: flex;
    width: 100%;
  }
`;
export const StyledModalButton = styled(Button)`
  background-color: white;
  color: black;
  cursor: pointer;
  flex: 1;
  font-size: var(--text-md);
  font-weight: 400;
  justify-content: center;
  transition: all 0.3s ease;

  &:first-of-type {
    border-radius: 0 0 0 var(--rounded-xs);
  }

  &:last-of-type {
    border-left: 1px solid gray;
    border-radius: 0 0 var(--rounded-xs) 0;
  }
`;
