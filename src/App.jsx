import { useState } from "react";
import "./App.css";
import { useGlobalContext } from "./Context";
import ThemeToggle from "./ThemeToggle";

function App() {
  const { isDarkTheme } = useGlobalContext();
  return (
    <>
      <ThemeToggle />
    </>
  );
}

export default App;
