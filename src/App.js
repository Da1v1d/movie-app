import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { RoutesComponent } from "./Routes/RoutesComponent";

function App() {
  return (
    <div className="App">
      <Navbar />
      <RoutesComponent />
    </div>
  );
}

export default App;
