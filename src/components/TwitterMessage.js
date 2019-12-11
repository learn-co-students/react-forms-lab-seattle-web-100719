import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      input: ""
    };
  }

  handleChange = (event) => {
    const input = event.target.value
    this.setState(prevState => {
      if (input.length <= this.props.maxChars) {
        return {
          input: input
        }
      }
    })
  }

  handleSubmit = (event) => {
    
  }

  charsLeft = () => {
    return this.props.maxChars - this.state.input.length
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.input} onChange={this.handleChange} onSubmit={this.handleSubmit} />
        <div><span>{this.charsLeft()} Characters Left</span></div>
      </div>
    );
  }
}

export default TwitterMessage;
