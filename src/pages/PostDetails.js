import { makeStyles } from "@mui/styles";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GETPOST } from "../ApiUrl";
import { themes } from "../Helpers/Theme";

const PostDetails = () => {
  const DetailsStyles = makeStyles((theme) => ({
    root: {
      padding: "100px 50px",
      backgroundColor: themes.palette.primary.maindark,
      color: themes.palette.primary.offwhite,
      height: "100vh",
      [theme.breakpoints.down("sm")]: {
        padding: "100px 13px",
      },
    },
  }));
  const classes = DetailsStyles();

  const [postdetails, setPostDetails] = useState({});
  let { id } = useParams();

  useEffect(() => {
    const fetchPost = async (id) => {
      const getPost = await axios.get(GETPOST(id));
      const response = getPost.data;
      setPostDetails(response);
    };
    fetchPost(id);
  }, []);

  return (
    <div className={classes.root}>
      <div>
        <h2>{postdetails.title}</h2>
      </div>
      <div>{postdetails.body}</div>
    </div>
  );
};

export default PostDetails;
