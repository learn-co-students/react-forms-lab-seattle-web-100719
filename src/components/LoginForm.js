import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleInputChange = (e) => {
    let elem = e.target.name
    this.setState({
      [elem]: e.target.value
    })
  }

  handleSubmission = (e) => {
    e.preventDefault()
    let username = this.state.username
    let password = this.state.password
    if (username && password) {
      this.props.handleLogin({username, password})
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmission}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleInputChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handleInputChange}/>
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
