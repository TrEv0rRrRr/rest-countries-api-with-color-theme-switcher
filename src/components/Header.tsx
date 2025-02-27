import { Sun } from "./icons";

const Header = () => {
  return (
    <header className="flex w-full bg-DM-Elements px-5 py-7 shadow-lg">
      <nav className="flex justify-between w-full">
        <h1 className="font-bold">Where in the world?</h1>
        <button className="flex items-center gap-2">
          <Sun />
          Light Mode
        </button>
      </nav>
    </header>
  );
};

export default Header;
