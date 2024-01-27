/// <reference types="react-scripts" />

interface ButtonBaseProps {
  children: React.ReactNode;
  type: "button" | "reset" | "submit" | undefined;
  color: "primary" | "secondary" | string;
  variant: "text" | "contained" | "outlined";
  ariaLabel: string;
  disabled?: boolean;
  onClick?: () => void;
}

interface ButtonProps extends ButtonBaseProps {
  size: "sm" | "md" | "lg";
}

interface IconButtonProps extends ButtonProps {
  size: "sm" | "md";
}

type StyledIconButtonProps = pick<
  IconButtonProps,
  "color",
  "variant",
  "size"
>;

interface ContainerProps {
  children: React.ReactNode;
  className: string;
}