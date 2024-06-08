import { useContext, createContext, useState, useEffect } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [search, setSearch] = useState("");

  const toggleDarkTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    const body = document.querySelector("body");
    body.classList.toggle("dark-theme", isDarkTheme);
    console.log(body);
  };

  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, search, setSearch }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);

export default AppProvider;
