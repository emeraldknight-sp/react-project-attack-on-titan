import { DataContextProvider } from "./DataContext";
import { MenuContextProvider } from "./MenuContext";

interface AppContextProps {
  children: React.ReactNode;
}

export const AppProvider = ({ children }: AppContextProps) => {
  return (
    <MenuContextProvider>
      <DataContextProvider>{children}</DataContextProvider>
    </MenuContextProvider>
  );
};
