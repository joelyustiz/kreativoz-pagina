import './input.css'
import { withFormsy } from 'formsy-react';
import React from 'react';


class MyInput extends React.Component {
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
          htmlFor={this.props.name}
          className="input-label"
        >
          {this.props.nombre}
        </label>
        <input
          className={errorMessage ? "input error-input" : "input"}
          id={this.props.name}
          onChange={this.changeValue}
          type={ this.props.type ? this.props.type : "text" }
          value={this.props.getValue() || ''}
        />
        {
          errorMessage &&
           <span className="input-error">{errorMessage}</span>
        }
      </div>
    );
  }
}

export default withFormsy(MyInput);