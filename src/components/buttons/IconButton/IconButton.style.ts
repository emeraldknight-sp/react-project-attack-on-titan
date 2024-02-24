import styled from "@emotion/styled";
import { Button } from "../Button";

export const StyledIconButton = styled(Button)<StyledIconButtonProps>`
  background-color: ${(props) =>
    props.color === "transparent" ? "transparent" : props.color};
  border-radius: ${(props) =>
    props.rounded === "full"
      ? "var(--rounded-full)"
      : props.rounded === "3xl"
        ? "var(--rounded-3xl)"
        : props.rounded === "2xl"
          ? "var(--rounded-2xl)"
          : props.rounded === "lg"
            ? "var(--rounded-lg)"
            : props.rounded === "md"
              ? "var(--rounded-md)"
              : props.rounded === undefined
                ? "var(--rounded)"
                : props.rounded === "sm"
                  ? "var(--rounded-sm)"
                  : "var(--rounded-none)"};

  &:disabled {
    background-color: var(--tertiary-color);
  }
`;
