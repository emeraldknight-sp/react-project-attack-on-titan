import { StyledButton } from "./Button.style";

export const Button = ({
  onClick,
  disabled = false,
  type = "button",
  rounded = "md",
  className = "",
  size = "md",
  style = {},
  color,
  children,
  ariaLabel,
}: ButtonProps) => {
  const buttonClassNames = `button--${size} button--${color} button--rounded-${rounded} ${className}`;

  return (
    <StyledButton
      className={buttonClassNames}
      onClick={onClick}
      disabled={disabled}
      style={style}
      type={type}
      aria-label={ariaLabel}
    >
      {children}
    </StyledButton>
  );
};
