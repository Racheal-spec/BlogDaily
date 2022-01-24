import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import { themes } from "../Helpers/Theme";

const Card = ({ title, body, id }) => {
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
      color: themes.palette.primary.greydark,
    },
    cardtitle: {
      color: themes.palette.primary.offwhite,
    },
    cardtext: {
      textAlign: "center",
    },
  }));
  const classes = CardStyles();
  return (
    <div className={classes.cardwrapper}>
      <Link to={`posts/${id}`} className={classes.cardlink}>
        <div className={classes.cardDetails}>
          <h3 className={classes.cardtitle}>{title}</h3>

          <p className={classes.cardtext}>{body}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
