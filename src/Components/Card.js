import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import { themes } from "../Helpers/Theme";

const Card = ({ title, body }) => {
  const CardStyles = makeStyles((theme) => ({
    cardwrapper: {
      backgroundColor: themes.palette.primary.dark,
      borderRadius: "5px",
      minHeight: 200,
      padding: "10px 20px",
      margin: 10,
    },
    cardlink: {
      textDecoration: "none",
    },
  }));
  const classes = CardStyles();
  return (
    <div className={classes.cardwrapper}>
      <Link to="/" className={classes.cardlink}>
        <div className={classes.cardDetails}>
          <h3>{title}</h3>
          <p>{body}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
