import "./Toolbar.sass";
import moon from "../assets/images/icon-moon.svg";

const Toolbar = () => {
  return (
    <header className="header">
      <h2>devfinder</h2>
      <button className="switch-theme-btn">
        <p>Dark</p>
        <img src={moon} alt="moon-icon" />
      </button>
    </header>
  );
};
export default Toolbar;
