import { withFormsy } from 'formsy-react';
import React from 'react';
import './input.css'

class MySelect extends React.Component {
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
        <select className="input select">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
        </select>
        {
          errorMessage &&
           <span className="input-error">{errorMessage}</span>
        }
      </div>
    );
  }
}

export default withFormsy(MySelect);