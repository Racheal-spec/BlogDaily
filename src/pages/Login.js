import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../Firebase-config";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsLogged }) => {
  let navigate = useNavigate();

  const LoginWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isLoggedin", true);
      setIsLogged(true);
      navigate("/");
    });
  };

  return (
    <div className="App">
      <h1>Blog Daily Login</h1>
      <p>Login with google to continue to app...</p>
      <button onClick={LoginWithGoogle}>Login with Google</button>
    </div>
  );
};

export default Login;
