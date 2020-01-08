import React from "react";

//This component takes one prop: maxChars which is a number — the maximum amount of characters a message can have. This prop is being passed in from the App component with the value 280.

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ""
    };
  }

  handleChange = e => {
    const string = e.target.value
    this.setState({
      message: string
    })
  }

  splitChars = string => {
    const arr = string.split('')
    return this.props.maxChars - arr.length;
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
        type="text" 
        name="message" 
        id="message" 
        value={this.state.message} 
        onChange={this.handleChange}
        />
    <h4>Number of chars left: {this.splitChars(this.state.message)} </h4>
      </div>
    );
  }
}

export default TwitterMessage;
