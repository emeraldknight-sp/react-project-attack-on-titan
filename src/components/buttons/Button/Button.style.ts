import styled from "@emotion/styled";

export const StyledButton = styled.button<ButtonProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none;
  border-radius: 4px;
  transition: all 0.5s ease;
  cursor: pointer;
  padding: 8px 8px;

  &:hover {
    filter: brightness(0.8);
  }
`;
