import { Button, Paper, TextField } from "@material-ui/core";
import React from "react";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Paper elevation={0} style={{ display: "flex", flexDirection: "column", width: "50%", padding: 20 }}>
          <div> Login Page</div>
          <TextField
            onChange={(e) => this.props.handleTextChange(e)}
            label="Enter user Name"
            style={{ marginTop: 20 }}
            name="name"
            value={this.props.name}
          />
          <TextField
            onChange={(e) => this.props.handleTextChange(e)}
            label="Enter user Password"
            style={{ marginTop: 20 }}
            name="password"
            value={this.props.password}
          />
        </Paper>
      </>
    );
  }
}
