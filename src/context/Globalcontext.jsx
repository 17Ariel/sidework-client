import { createContext, useState } from "react";

export const Globalcontext = createContext();

export const Globalprovider = ({ children }) => {
  const [isOpen, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!isOpen);
  };

  return (
    <Globalcontext.Provider value={{ isOpen, setOpen, handleToggle }}>
      {children}
    </Globalcontext.Provider>
  );
};
