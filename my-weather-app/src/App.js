import Forecast from "./components/Forecast/Forecast";
import "./App.css";

function App() {
  return (
    <div className="App">
      <main>
        {/* fetching component */}
        <Forecast />
      </main>
      <footer>@ Supriya</footer>
    </div>
  );
}

export default App;
