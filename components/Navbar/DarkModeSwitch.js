import React, { useState } from "react";

// import { motion } from "framer-motion";
import { ImSun } from "react-icons/im";
import { MdDarkMode } from "react-icons/md";

import useDarkMode from "../../Hooks/useDarkMode";
// import useDarkMode from "../../hooks/useDarkMode";
const DarkModeSwitch = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();

  return (
    // <motion.button
    <button
      // layout
      onClick={() => setDarkTheme(!darkTheme)}
      className={`fixed bottom-4 right-5 z-50 mt-6 flex items-center justify-center overflow-hidden rounded-3xl bg-gray-100 px-3 py-3 text-lg text-Red transition-all duration-300 ease-linear hover:rounded-lg dark:bg-gray-900 ${
        darkTheme && "group"
      }`}
      name="light/dark-mode-switch"
      aria-label="light/dark-mode-switch"
    >
      <ImSun
        className={`transition-all duration-300 ease-linear ${
          !darkTheme && "scale-0"
        }`}
      />
      <MdDarkMode
        className={`absolute transition-all duration-300 ease-linear ${
          darkTheme && "scale-0"
        }`}
      />
    </button>
    // </motion.button>
  );
};

export default DarkModeSwitch;
