import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  charactersLeft = (message) => {
    let charactersLeft = this.props.maxChars - message.length
    return charactersLeft
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={event => this.handleInput(event)}/>
        <p>Characters Left: {this.charactersLeft(this.state.message)}</p>
      </div>
    );
  }
}

export default TwitterMessage;
