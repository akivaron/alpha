import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { addPostStart, fetchPostsStart } from "../../../redux/posts/posts.actions";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({  
  card: {
    backgroundColor: "#d7f7ff",
    boxShadow: theme.shadows[2],
    padding: theme.spacing(2, 4, 3),
    height: "250px",
    marginBottom: '50px'
  },
  button: {
    color: "#fff",
    width: "100%",
    marginTop:"50px",
    padding: "10px",
  },
}));

function AddItem({ addPostStart, fetchPostsStart }) {
  const classes = useStyles();
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleBody = (event) => {
    setBody(event.target.value);
  };

  const handlePost = (event) => {
    event.preventDefault();
    const data = { userId: 1, title, body };
    addPostStart(data);
    //fetchPostsStart();
    setBody("");
    setTitle("");
  };

  return (
    <div>
      <div className={classes.card}>
            <Typography variant={"h5"} component={"h6"}>
              New Post
            </Typography>
            <form onSubmit={handlePost}>
              <TextField
                label={"Title"}
                name={"title"}
                value={title}
                onChange={handleChange}
                fullWidth
                as={"textarea"}
                rows={3}
              />
              <TextField
                label={"Body"}
                name={"body"}
                value={body}
                onChange={handleBody}
                fullWidth
              />
              <Button
                onClick={handlePost}
                variant={"contained"}
                color={"primary"}
                className={classes.button}
              >
                Create
              </Button>
            </form>
          </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addPostStart: (data) => dispatch(addPostStart(data)),
  fetchPostsStart: () => dispatch(fetchPostsStart()),
});

export default connect(null, mapDispatchToProps)(AddItem);
