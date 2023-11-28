import "./App.css";
import Navbar from "./layout/Navbar";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        {/* <Register /> */}
        <Login />
      </div>
    </div>
  );
}

export default App;
