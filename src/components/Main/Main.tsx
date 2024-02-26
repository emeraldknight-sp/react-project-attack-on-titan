import { ContainerMain, StyledMain } from "./Main.style"

export const Main = ({children}: {children: React.ReactNode}) => {
  return (
    <StyledMain>
      <ContainerMain>
        {children}
      </ContainerMain>
    </StyledMain>
  )
}