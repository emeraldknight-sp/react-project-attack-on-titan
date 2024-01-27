import { StyledContainer } from "./Container.style";



export const Container = ({ children, className }: ContainerProps) => {
  return <StyledContainer className={className}>{children}</StyledContainer>;
};
