import { useState } from "react";
import "./App.css";
import { useGlobalContext } from "./Context";
import ThemeToggle from "./ThemeToggle";
import SearchForm from "./SearchForm";

function App() {
  const { isDarkTheme } = useGlobalContext();
  return (
    <>
      <ThemeToggle />
      <SearchForm />
    </>
  );
}

export default App;
