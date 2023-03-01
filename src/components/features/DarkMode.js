import { useState, useEffect } from "react";
import { ReactComponent as SunDarkMode } from "./icons/sun.svg";
import { ReactComponent as MoonDarkMode } from "./icons/moon.svg";

function DarkMode() {
  const [theme, setTheme] = useState(null);

  //check default theme from user browser
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);
  // add class dark at the "top"
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div>
      <div
        className="flex cursor-pointer dark:text-White text-VeryDarkBlue"
        onClick={handleThemeSwitch}
      >
        {theme === "light" ? (
          <>
            <MoonDarkMode />
            <h1>Dark Mode</h1>
          </>
        ) : (
          <>
            <SunDarkMode />
            <h1>Light Mode</h1>
          </>
        )}
      </div>
    </div>
  );
}

export default DarkMode;
