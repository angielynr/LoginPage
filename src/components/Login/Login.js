import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import { Paper, TextField, Button, Box, Typography } from "@mui/material";
import classes from "./login.module.css";
import logo from "../../assets/logo.png";

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  //const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  //const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    setFormIsValid(
      enteredEmail.includes("@") && enteredPassword.trim().length > 6
    );
  }, [enteredEmail, enteredPassword]);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
    //setEmailIsValid(enteredEmail.includes("@"));
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  // const validateEmailHandler = () => {
  //   setEmailIsValid(enteredEmail.includes("@"));
  // };

  // const validatePasswordHandler = () => {
  //   setPasswordIsValid(enteredPassword.trim().length > 6);
  // };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <div>
      <Container maxWidth="sm">
        <img src={logo} alt="" className={classes.logo} />
        <Paper
          elevation={3}
          sx={{ px: 8, py: 5, mt: 10 }}
          className={classes.container}
        >
          <form onSubmit={submitHandler} className={classes["form-container"]}>
            <Typography
              variant="h4"
              component="h1"
              sx={{ textAlign: "center", color: "#00004A", fontWeight: "500" }}
            >
              Login
            </Typography>
            <TextField
              color="primary"
              //error={enteredEmail.includes("@") === false}
              fullWidth
              required
              placeholder="Enter your email"
              label="Email"
              type="email"
              id="email"
              value={enteredEmail}
              onChange={emailChangeHandler}
              margin="normal"
            />
            <TextField
              //error={enteredPassword.trim().length < 6}
              fullWidth
              required
              label="Password"
              placeholder="Enter your password"
              type="password"
              id="password"
              value={enteredPassword}
              onChange={passwordChangeHandler}
              margin="normal"
            />
            <Box>
              <Button
                variant="contained"
                size="large"
                type="submit"
                disabled={!formIsValid}
                sx={{ mt: 3 }}
              >
                Login
              </Button>
            </Box>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default Login;
