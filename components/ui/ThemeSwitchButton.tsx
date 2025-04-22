"use client";

import React, { useState, useEffect } from "react";

const ThemeSwitchButton = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="theme-switch cursor-pointer rounded px-4 py-2 opacity-70 focus-within:opacity-100 hover:opacity-100"
    >
      Switch to {theme === "light" ? "dark" : "light"} mode
    </button>
  );
};

export default ThemeSwitchButton;
