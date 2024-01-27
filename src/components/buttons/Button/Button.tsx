import { StyledButton } from "./Button.style";

export const Button = ({
  children,
  type,
  ariaLabel,
  disabled,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      type={type}
      ariaLabel={ariaLabel}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </StyledButton>
  );
};
