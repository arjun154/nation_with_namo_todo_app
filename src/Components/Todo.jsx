import React, { useState } from "react";
import {
  TextField,
  Checkbox,
  Container,
  Box,
  Typography,
  Button,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { addTask, taskCompleted, clearTodo } from "../Redux/actions";
import { makeStyles } from "@material-ui/core/styles";

export default function Todo() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todos);

  const handleSubmit = () => {
    dispatch(addTask(task));
    setTask("");
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  const handleToggle = (e) => {
    dispatch(taskCompleted(e.target.id));
  };

  const useStyles = makeStyles({
    root: {
      background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      border: 0,
      display: "flex",
      justifyContent: "space-between",
      flex: 1,
      margin: "auto",
      marginTop: 10,
      width: 300,
      borderRadius: 3,
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      color: "white",
      height: 50,
      padding: "0 30px",
    },
    box: {
      marginTop: 15,
    },
    complete: {
      marginTop: 15,
      textDecoration: "line-through",
    },
    button: {
      marginLeft: "80%",
      marginTop: "10px",
    },
  });

  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => dispatch(clearTodo())}
        className={classes.button}
      >
        Reset
      </Button>
      <h1>Todo Applicaiton</h1>
      <TextField
        id="outlined-basic"
        label="Add Something..."
        variant="outlined"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyPress={handleKeyPress}
      />

      <Container>
        {todo &&
          todo
            .filter((item) => item.status === false)
            .map((item) => (
              <Box key={item.id} className={classes.root}>
                <Checkbox
                  checked={item.status}
                  onChange={handleToggle}
                  id={item.id}
                />
                <div className={classes.box}>{item.title}</div>
                <Typography className={classes.box}>Not Completed</Typography>
              </Box>
            ))}
      </Container>
      <Container>
        {todo &&
          todo
            .filter((item) => item.status === true)
            .map((item) => (
              <Box key={item.id} className={classes.root}>
                <Checkbox
                  checked={item.status}
                  onChange={handleToggle}
                  id={item.id}
                />
                <div className={classes.complete}>{item.title}</div>
                <Typography className={classes.box}>Completed</Typography>
              </Box>
            ))}
      </Container>
    </div>
  );
}
