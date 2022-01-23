import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../Firebase-config";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { themes } from "../Helpers/Theme";

const Login = ({ setIsLogged }) => {
  const LoginStyles = makeStyles((theme) => ({
    root: {
      padding: "150px 0",
      backgroundColor: themes.palette.primary.maindark,
      height: "100vh",
      color: themes.palette.primary.white,
    },
    buttonStyles: {
      backgroundColor: themes.palette.primary.darkbtn,
      borderRadius: "3px",
      color: themes.palette.primary.white,
      padding: "10px 18px",
      fontWeight: "600",
      fontSize: "16px",
      cursor: "pointer",
      border: "none",
      margin: "20px 0",
    },
    text: {
      width: "35%",
      margin: "15px auto",
      textAlign: "center",
      [theme.breakpoints.down("sm")]: {
        width: "80%",
      },
    },
  }));
  const classes = LoginStyles();

  let navigate = useNavigate();

  const LoginWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isLoggedin", true);
      setIsLogged(true);
      navigate("/");
    });
  };

  return (
    <div className={classes.root}>
      <h1>Blog Daily Login</h1>
      <p className={classes.text}>
        To keep connected with us please login with your personal info with
        google
      </p>
      <button className={classes.buttonStyles} onClick={LoginWithGoogle}>
        Login with Google
      </button>
    </div>
  );
};

export default Login;
