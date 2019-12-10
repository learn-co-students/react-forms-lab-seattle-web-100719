import React from "react";
import { EventEmitter } from "events";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      maxChars: this.props.maxChars,
      remaining: 280,
      input: ""
    };
  }

  handleEvent = event => {
    this.setState({
      remaining: this.state.maxChars - event.target.value.length,
      input: event.target.value
    });
  };

  render() {
    return (
      <div>
        {this.state.remaining}
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          onChange={event => this.handleEvent(event)}
          value={this.state.input}
        />
      </div>
    );
  }
}

export default TwitterMessage;
