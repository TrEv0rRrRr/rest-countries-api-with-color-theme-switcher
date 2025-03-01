import { useTheme } from "../hooks/useTheme";
import capitalizeString from "../utils/capitalizeString";
import { Moon, Sun } from "./icons";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header
      className="flex w-full px-5 py-7 shadow-lg xl:px-10 sticky top-[-1px] z-10 bg-LM-Bg 
      dark:bg-DM-Bg"
    >
      <nav className="flex justify-between w-full">
        <h1 className="font-bold xl:text-3xl">Where in the world?</h1>
        <button
          className="flex items-center gap-2 xl:text-xl cursor-pointer"
          onClick={toggleTheme}
        >
          {theme === "light" ? <Sun /> : <Moon />}
          {capitalizeString(theme)} Mode
        </button>
      </nav>
    </header>
  );
};

export default Header;
