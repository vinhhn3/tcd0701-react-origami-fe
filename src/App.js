import "./App.css";
import Navbar from "./layout/Navbar";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Register />
      </div>
    </div>
  );
}

export default App;
