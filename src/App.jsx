import { useState } from "react";
import "./App.css";
import { useGlobalContext } from "./Context";
import ThemeToggle from "./ThemeToggle";
import SearchForm from "./SearchForm";
import Gallery from "./Gallery";

function App() {
  const { isDarkTheme } = useGlobalContext();
  return (
    <>
      <ThemeToggle />
      <SearchForm />
      <Gallery />
    </>
  );
}

export default App;
