import logo from "./logo.svg";
import "./App.css";
import Documentation from "./Documentation";
import Counter from "./Counter";
import Employee from "./employee";

function App() {
  const employeeInfo = [
    {
      firstName: "Jakhongir",
      lastName: "Dekhkanov",
      age: 32,
      employeeId: "1",
    },
    {
      firstName: "Aziz",
      lastName: "Dekhkanov",
      age: 28,
      employeeId: "2",
    },
    {
      firstName: "Otabek",
      lastName: "Dekhkanov",
      age: 23,
      employeeId: "3",
    },
    {
      firstName: "Mekhriniso ",
      lastName: "Dekhkanov",
      age: 21,
      employeeId: "4",
    },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <h1> Company Directory</h1>
        {employeeInfo.map((employee) => {
          return <Employee key={employee.employeeId} {...employee} />;
        })}
      </header>
    </div>
  );
}

export default App;
