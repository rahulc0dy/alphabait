"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const ThemeLogo = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const currentTheme =
      document.documentElement.getAttribute("data-theme") || "light";
    setTheme(currentTheme);
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "data-theme"
        ) {
          const newTheme =
            document.documentElement.getAttribute("data-theme") || "light";
          setTheme(newTheme);
        }
      });
    });
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  const logoSrc =
    theme === "dark"
      ? "/assets/images/alphabait-logo-dark.png"
      : "/assets/images/alphabait-logo-light.png";

  return (
    <Image
      src={logoSrc}
      width={100}
      height={100}
      alt="logo"
      className="size-8"
    />
  );
};

export default ThemeLogo;
