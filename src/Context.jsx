import { useContext, createContext, useState, useEffect } from "react";
import customFetch from "./customFetch";

const AppContext = createContext();

const getInitialDarkMode = () => {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)" // check index.css
  ).matches;
  const storedDarkMode = localStorage.getItem("darkTheme");
  console.log(prefersDarkMode || storedDarkMode);
  if (storedDarkMode === null) {
    return prefersDarkMode;
  }

  return storedDarkMode === "true";
};

const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode());
  console.log(document.body);
  const [search, setSearch] = useState("cats");

  const toggleDarkTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    //  const body = document.querySelector("body");
    //  body.classList.toggle("dark-theme", isDarkTheme);
    //  console.log(body);
    localStorage.setItem("darkTheme", isDarkTheme);
  };

  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDarkTheme);
  }, [isDarkTheme]);

  /*useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(customFetch);
        const data = await customFetch(`query=${"cat"}`);
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);*/

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
