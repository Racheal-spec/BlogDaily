import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { useState } from "react";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login setIsLogged={setIsLogged} />} />
          <Route path="/" exact element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
