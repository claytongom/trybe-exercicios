import React, { Component } from 'react';
import './App.css';
import ValidEmail from './Components/ValidEmail';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      saveEmail: false,
    };
  }

  changeEmail = (value) => {
    this.setState({ email: value });
  }

  saveEmail = (value) => {
    this.setState({ saveEmail: value, email: '' });
  }

  render() {
    const { email, saveEmail } = this.state;
    return (
    <div className="App">
      <label htmlFor="id-email">
        Email
        <input
          id="id-email"
          type="email"
          value={ email }
          onChange={ (event) => this.changeEmail(event.target.value) }
        />
      </label>
      <input
        type="button"
        value="Enviar"
        id="btn-enviar"
        data-testid="id-enviar"
        onClick={ () => this.saveEmail(true) }
      />
      <input
        type="button"
        value="Voltar"
        id="btn-voltar"
      />
      <ValidEmail email={ saveEmail } />
    </div>
  );
  }
}

export default App;
