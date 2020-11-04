import { useEffect, useState } from "react";
import Countries from "../components/Countries";
import Global from "../components/Global";
import Hero from "../components/Hero";

const Home = () => {
  const [thisMode, setThisMode] = useState();
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(isDarkMode));
  }, [isDarkMode]);
  const handleMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("dark-mode", !isDarkMode);
  };
  return (
    <div
      className={
        isDarkMode ? "px-5 md:px-20 py-10 bg-gray-900" : "px-5 md:px-20 py-10"
      }
    >
      <Hero onChange={handleMode} checked={isDarkMode} />

      <div className="mt-16">
        <Global />
      </div>

      <div className="mt-16">
        <Countries />
      </div>
    </div>
  );
};

export default Home;
