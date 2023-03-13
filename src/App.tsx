import "./App.sass";
import SearchBox from "./components/SearchBox";
import moon from "./assets/images/icon-moon.svg";
import sun from "./assets/images/icon-sun.svg";
import { useState } from "react";

const App = () => {
  const [theme, setTheme] = useState("");

  const switchTheme = () => {
    if (!theme) setTheme("dark");
    else setTheme("");
  };
  return (
    <main className={`App ${theme}`}>
      <div className="container">
        <header>
          <h2>devfinder</h2>
          <button className="switch-theme-btn" onClick={switchTheme}>
            <p>{theme ? "light" : "dark"}</p>
            <img src={theme ? sun : moon} alt="moon-icon" />
          </button>
        </header>
        <SearchBox />
      </div>
    </main>
  );
};

export default App;
