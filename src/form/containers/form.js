import Formsy from 'formsy-react';
import React from 'react';
import MyInput from '../components/input';
import Button from '../../widgets/components/button'
import TextArea from '../components/text-area'
import MySelect from '../components/select'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.disableButton = this.disableButton.bind(this);
    this.enableButton = this.enableButton.bind(this);
    this.state = { 
      canSubmit: false 
    };
  }

  disableButton() {
    this.setState({ canSubmit: false });
  }

  enableButton() {
    this.setState({ canSubmit: true });
  }

  submit(model) {
    // fetch('http://example.com/', {
    //   method: 'post',
    //   body: JSON.stringify(model)
    // });

    console.log("Se ha enviado")
  }

  render() {
    return (
      <Formsy className="Formsy"onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
        <MyInput
          nombre="Nombre"
          text="nombre"
          name="nombre"
          validations="isSpecialWords"
          validationError="No se aceptan Números y caracteres"
          required
        />
         <MyInput
          nombre="Telefono"
          name="telefono"
          type="number"
          validations="isNumeric"
          validationError="Solo números"
          required
        />
         <MyInput
          nombre="Correo"
          name="email"
          type="email"
          validations="isEmail"
          validationError="Ingrese un correo válido."
          required
        />
         <MyInput
          nombre="Empresa"
          name="empresa"
          validations="maxLength:100"
          validationError="No mas de 100 caracteres"
          required
        />
         <MyInput
          nombre="Cargo"
          name="cargo"
          validations="maxLength:50"
          validationError="No mas de 50 caracteres"
          required
        />
         <MySelect
          nombre="Cotización"
          name="cotizacion"
          validations="isAlphanumeric"
          validationError="No se aceptan caracteres"
        />
         <TextArea
          nombre="Comentanos"
          name="comentanos"
          type="text"
          validations="minLength:100"
          validationError="Incluya al menos 100 caracteres"
          required
        />
        {/* <Button
          type="submit"
          disabled={!this.state.canSubmit}
          text="Enviar"
        /> */}
        <button 
          className={this.state.canSubmit ? "btn-form" : "btn-form btn-disable"  }
          type="submit" 
          disabled={!this.state.canSubmit}
        >
            Enviar
        </button>
      </Formsy>
    );
  }
}