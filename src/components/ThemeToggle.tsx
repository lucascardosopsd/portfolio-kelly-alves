"use client";
import { useTheme } from "next-themes";
import { CiSun } from "react-icons/ci";
import { FaRegMoon } from "react-icons/fa";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "dark") {
      return setTheme("light");
    }
    return setTheme("dark");
  };

  return (
    <span className="relative cursor-pointer p-2" onClick={toggleTheme}>
      <div className="group flex items-center border border-zinc-800 hover:bg-zinc-800 dark:border-purple dark:hover:bg-purple p-2 rounded-md transition">
        <span className="block dark:hidden text-zinc-800 group-hover:text-white transition">
          <CiSun size={25} />
        </span>
        <span className="hidden dark:block text-purple dark:group-hover:text-white transition">
          <FaRegMoon size={25} />
        </span>
      </div>
      <span className="sr-only">Switch to light / dark version</span>
    </span>
  );
}
