import { Grid, Modal, Box, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import { useEffect, useState } from "react";
import { CREATEPOST, GETPOSTS } from "../ApiUrl";
import Card from "../Components/Card";
import { themes } from "../Helpers/Theme";

const Home = () => {
  const HomeStyles = makeStyles((theme) => ({
    root: {
      padding: "100px 50px",
      backgroundColor: themes.palette.primary.maindark,
    },
    modalstyle: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "70%",
      height: "90%",
      backgroundColor: themes.palette.primary.white,
      boxShadow: 24,
      padding: "20px 15px",
    },
    textDiv: {
      display: "flex",
      flexDirection: "column",
      alignItem: "center",
      justifyContent: "center",
      margin: "0 auto",
    },
    input: {
      margin: "0 auto",
      width: "100%",
      padding: "10px 20px",
    },
    spaceY: {
      padding: "16px 0",
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
    titleDiv: {
      display: "flex",
      alignItem: "center",
      justifyContent: "space-between",
      color: themes.palette.primary.white,
      padding: "0 14px",
    },
    text: {
      fontWeight: "bold",
      color: themes.palette.primary.offwhite,
    },
  }));
  const classes = HomeStyles();

  const [allposts, setAllPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [body, setBody] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      const getPosts = await axios.get(GETPOSTS);
      const response = getPosts.data;
      setAllPosts(response);
      console.log(response);
    };
    fetchPosts();
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const newPost = async () => {
    await axios
      .post(CREATEPOST, {
        title,
        body,
      })
      .then((response) => {
        let newpost = response.data;
        let newBlogPosts = [...allposts, newpost];
        setAllPosts(newBlogPosts);
      })
      .catch((err) => {
        console.log(err.message);
      });
    handleClose();
  };

  return (
    <div className={classes.root}>
      <div>
        <div className={classes.titleDiv}>
          <div>
            <p className={classes.text}>Popular posts from BlogDaily</p>
          </div>
          <div>
            <button className={classes.buttonStyles} onClick={handleOpen}>
              Create New Post
            </button>
          </div>
        </div>

        <Modal open={open} onClose={handleClose}>
          <Box className={classes.modalstyle}>
            <div className={classes.textDiv}>
              <Typography className={classes.spaceY} variant="h5">
                Title
              </Typography>
              <TextField
                id="outlined-basic"
                variant="outlined"
                className={classes.input}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <Typography className={classes.spaceY} variant="h5">
                Body
              </Typography>
              <TextField
                id="outlined-multiline-static"
                multiline
                rows={10}
                value={body}
                onChange={(e) => setBody(e.target.value)}
                defaultValue="write a post..."
                className={classes.input}
              />
            </div>
            <div>
              <button
                type="submit"
                variant="contained"
                className={classes.buttonStyles}
                onClick={newPost}
              >
                Create Post
              </button>
            </div>
          </Box>
        </Modal>
      </div>
      <Grid container>
        {allposts.map((post) => (
          <Grid item lg={4} xs={12} md={6} key={post.id}>
            <Card id={post.id} title={post.title} body={post.body} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
