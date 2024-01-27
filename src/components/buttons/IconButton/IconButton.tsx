import { StyledIconButton } from "./IconButton.style";

export const IconButton = ({
  children,
  type,
  ariaLabel,
  disabled,
  onClick,
  ...props
}: IconButtonProps) => {
  return (
    <StyledIconButton
      type={type}
      aria-label={ariaLabel}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </StyledIconButton>
  );
};
