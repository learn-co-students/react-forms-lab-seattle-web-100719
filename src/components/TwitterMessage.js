import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      maxChars: this.props.maxChars,
      input: '',
    };
  }

  handleChange = event => {
    this.setState({
      maxChars: this.state.maxChars - 1,
      input: event.target.value,
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" 
        onChange={event => this.handleChange(event)} 
        value={this.state.input}/>
        <p>Remaining characters: {this.state.maxChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
