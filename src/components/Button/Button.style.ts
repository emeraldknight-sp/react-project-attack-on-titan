import styled from "@emotion/styled";

export const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;

  font-size: var(--text-lg);
  font-family: var(--text-content);
  font-weight: 600;
  line-height: var(--line-height-lg);
  color: white;

  background-color: transparent;
  border: none;
  transition: all 0.5s ease;
  cursor: pointer;
  outline: none;

  &.button--sm {
    padding: 8px;
  }

  &.button--md {
    padding: 8px 16px;
  }

  &.button--lg {
    padding: 16px 24px;
  }

  &.button--primary {
    background-color: var(--primary-color);
  }

  &.button--secondary {
    background-color: var(--secondary-color);
  }

  &.button--tertiary {
    background-color: var(--tertiary-color);
  }

  &.button--rounded-sm {
    border-radius: var(--rounded-sm);
  }

  &.button--rounded-md {
    border-radius: var(--rounded-md);
  }

  &.button--rounded-lg {
    border-radius: var(--rounded-lg);
  }

  a,
  span {
    color: white;
    text-decoration: none;
  }

  &:hover {
    filter: brightness(0.8);
  }

  &:disabled {
    background-color: rgba(133, 133, 133, 0.5);
  }
`;
