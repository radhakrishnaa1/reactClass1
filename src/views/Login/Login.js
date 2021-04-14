// class components
// functional components

import { Button, Paper, TextField } from "@material-ui/core";
import React from "react";
import LoginForm from "./LoginForm";
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
    };
  }

  handleTextChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = () => {
    console.log("state value ", this.state);
  };

  handleReset = () => {
    this.setState({ name: "", password: "" }, () => {
      console.log("state value ", this.state);
    });
  };

  render() {
    return (
      <>
        <Paper
          style={{ display: "flex", marginBottom: 10, flexDirection: "column", width: "50%", height: 100, padding: 20 }}
        >
          Slider1
        </Paper>
        <LoginForm name={this.state.name} password={this.state.password} handleTextChange={this.handleTextChange} />
        <Paper
          style={{ display: "flex", marginTop: 10, flexDirection: "column", width: "50%", height: 100, padding: 20 }}
        >
          Slider2
        </Paper>
        <Button style={{ marginTop: 20 }} onClick={this.handleSubmit}>
          Submit
        </Button>
        <Button style={{ marginTop: 20 }} onClick={this.handleReset}>
          Reset
        </Button>
      </>
    );
  }
}
