import React from "react";
import '../style.css';
export default class extends React.Component {
  static async getInitialProps() {
    return { text: 'Initial label value.' }
  }
  constructor(props) {
    super(props);
    this.state = { text: props.text };
  }
  render() {
    return(
      <div>
        <h1>Redux Demo</h1>
        <br />
        <div className="center">
          <input id="inputTextbox" type="text">
          </input>
          <button type="button"
              onClick={this.GetUser}>
              Update Label
          </button>
        </div>
        <br />
        <p>{this.state.text}</p>
      </div>
    );
  }
}