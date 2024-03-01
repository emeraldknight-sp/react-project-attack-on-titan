import { createContext, useState } from "react";

export const MenuContext = createContext<MenuContextProps>({
  openMenu: false,
  handleOpenMenu: () => {},
});

export const MenuContextProvider = ({ children }: MenuContextProviderProps) => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <MenuContext.Provider value={{ openMenu, handleOpenMenu }}>
      {children}
    </MenuContext.Provider>
  );
};
