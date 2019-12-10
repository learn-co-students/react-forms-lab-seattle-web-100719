import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      handleLogin: this.props.handleLogin,
      username: '',
      password: '',
    };
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    if(this.state.username !== "" && this.state.password !== ""){
        this.state.handleLogin(this.state.username, this.state.password);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" 
            value={this.state.input}
            onChange={event => this.handleInputChange(event)}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" 
            value={this.state.input}
            onChange={event => this.handleInputChange(event)}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
