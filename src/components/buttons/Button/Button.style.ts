import styled from "@emotion/styled";

export const StyledButton = styled.button<ButtonProps>`
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

  border: none;
  transition: all 0.5s ease;
  cursor: pointer;
  outline: none;

  a,
  span {
    color: white;
    text-decoration: none;
  }

  padding: ${(props) =>
    props.size === "sm"
      ? "8px 8px"
      : props.size === "md"
        ? "8px 16px"
        : "12px 20px"};

  border-radius: ${(props) =>
    props.rounded === "lg"
      ? "100%"
      : props.rounded === "md"
        ? "32px"
        : props.rounded === "sm"
          ? "16px"
          : "none"};

  background-color: ${(props) =>
    props.color === "primary"
      ? "var(--primary-color)"
      : props.color === "secondary"
        ? "var(--secondary-color)"
        : "var(--tertiary-color)"};

  &:hover {
    filter: brightness(0.8);
  }

  &:disabled {
    background-color: rgba(133, 133, 133, 0.5);
  }
`;
