import { ContainerMain, StyledMain } from "./Main.style"

export const Main = ({children}: MainProps) => {
  return (
    <StyledMain>
      <ContainerMain>
        {children}
      </ContainerMain>
    </StyledMain>
  )
}