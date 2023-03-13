import "./App.sass";
import SearchBox from "./components/SearchBox";
import Result from "./components/Result";
import Toolbar from "./components/Toolbar";

function App() {
  return (
    <main className="App">
      <div className="container">
        <Toolbar />
        <SearchBox />
      </div>
    </main>
  );
}

export default App;
