import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { useState } from "react";
import { auth } from "./Firebase-config";
import { signOut } from "firebase/auth";
import { ThemeProvider } from "@mui/material/styles";
import { themes } from "./Helpers/Theme";
import PostDetails from "./pages/PostDetails";

function App() {
  let saveuser = localStorage.getItem("isLoggedin");
  const [isLogged, setIsLogged] = useState(saveuser);

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
            <Link to="/" className="logo">
              <h3>BlogDaily</h3>
            </Link>
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
            <Route path="/posts" exact element={<PostDetails />} />
            <Route path="/posts/:id" element={<PostDetails />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
