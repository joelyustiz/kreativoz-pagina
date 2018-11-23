import { withFormsy } from 'formsy-react';
import React from 'react';
import './input.css'

class MyTextArea extends React.Component {
  constructor(props) {
    super(props);
    this.changeValue = this.changeValue.bind(this);
  }

  changeValue(event) {
    // setValue() will set the value of the component, which in
    // turn will validate it and the rest of the form
    // Important: Don't skip this step. This pattern is required
    // for Formsy to work.
    this.props.setValue(event.currentTarget.value);
  }

  render() {
    // An error message is returned only if the component is invalid
    const errorMessage = this.props.getErrorMessage();

    return (
      <div className="Input-container"> 
        <label
            className="input-label" 
            htmlFor={this.props.name}
        >
            {this.props.nombre}
        </label>
        <textarea
          className={errorMessage ? "input error-input" : "input"}
          id={this.props.name}
          onChange={this.changeValue}
          type={ this.props.type ? this.props.type : "text" }
          value={this.props.getValue() || ''}
        >
        </ textarea>
        <span className="input-error">{errorMessage}</span>
      </div>
    );
  }
}

export default withFormsy(MyTextArea);