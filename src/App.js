import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { useState } from "react";
import { auth } from "./Firebase-config";
import { signOut } from "firebase/auth";
import { ThemeProvider } from "@mui/material/styles";
import { themes } from "./Helpers/Theme";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsLogged(false);
      window.location.pathname = "/login";
    });
  };

  return (
    <ThemeProvider theme={themes}>
      <Router>
        <div className="App">
          <nav>
            <div>
              <h3 className="logo">BlogDaily</h3>
            </div>
            <ul>
              <li>
                <Link to="/" className="navlink">
                  Home
                </Link>
              </li>
              <li>
                {!isLogged ? (
                  <Link to="/login" className="navlink">
                    Login
                  </Link>
                ) : (
                  <button onClick={signUserOut} className="logoutbtn">
                    Log Out
                  </button>
                )}
              </li>
            </ul>
          </nav>
          <Routes>
            <Route
              path="/login"
              element={<Login setIsLogged={setIsLogged} />}
            />
            <Route path="/" exact element={<Home isLogged={isLogged} />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
