import "./App.css";
import Game from "./components/Game";

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>Tic-Tac-Toe</h1>
        <Game />
      </header>
    </div>
  );
}

export default App;
