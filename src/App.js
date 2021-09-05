import logo from "./logo.svg";
import "./App.css";
import Documentation from "./Documentation";
import Counter from "./Counter";

function App() {
  const headerText = "Welcome Aziz";
  return (
    <div className="App">
      <header className="App-header">
        <h2> Welcome to my Counter :)</h2>
        <Counter />
      </header>
    </div>
  );
}

export default App;
