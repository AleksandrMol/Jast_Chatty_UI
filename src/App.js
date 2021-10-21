import React from 'react';
import './App.css';

class Input extends React.Component {
  constructor(props) {
    super(props); // обязательно для конструктора

    this.state = {
      // обьявляем state
      inputName: 'User name',
      placeholder: 'Input user name',
      type: 'text',
      trueValue: 'KOnstantin K',
      valid: true,
      errorText: 'Something goes wrong',
    };
  } //state объявляется в конструкторе

  Validation = (e) => {
    e.preventDefault();
    console.log('Gay_Party');
    if (document.getElementById(this.props.for).value !== (this.state.trueValue && '')) {
      this.setState({ valid: false });
    } else {
      this.setState({ valid: true });
    }
  };

  render() {
    const inputClass = 'tell-input ' + (this.state.valid ? '' : 'tell-error');
    const errorClass = 'error-text ' + (this.state.valid ? '' : 'error-active');
    return (
      <div className="tell-cell">
        <label for={this.props.for} className="tell-label">
          {this.state.inputName}
        </label>
        <input
          onInput={this.Validation}
          name={this.props.for}
          id={this.props.for}
          type={this.state.type}
          className={inputClass}
          placeholder={this.state.placeholder}
        />
        <div className={errorClass}>{this.state.errorText}</div>
      </div>
    );
  }
}

export default Input;
