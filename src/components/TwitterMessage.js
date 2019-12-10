import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleMessageChange = event => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <p>Chars Left: {this.props.maxChars - this.state.message.length}</p>
        <input type="text" name="message" id="message" onChange={event => this.handleMessageChange(event)} value={this.state.message}/>
      </div>
    );
  }
}

export default TwitterMessage;
