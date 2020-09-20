import React from "react";
import "../style.css";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeState } from '../Actions/actions'
class ReduxDemo extends React.Component {
  render() {
    return (
      <div>
        <h1>Redux Demo</h1>
        <br />
        <div className="center">
          <input id="inputTextbox" type="text">
          </input>
          <button type="button"
              onClick={this.props.changeState}>
              Update Label
          </button>
        </div>
        <br />
        <p>{this.props.text}</p>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    changeState: bindActionCreators(changeState, dispatch)
  }
}
/*props is now injected by the react-redux library. 
The first parameter contains State-related entities that you want to inject to the Page, and the second parameter is the Page itself. 
We are injecting the text property that resides in the state object. We are also injecting the method that is used to dispatch an Action to modify the Store object. 
We pass this method to the click event of the button by accessing it in the Page using “this.props.changeState”. 
We also bind the label (<p>) to the “text” property of State object using “this.props.text”.
*/
export default connect((state) => ({ text: state.text }), mapDispatchToProps)(ReduxDemo)