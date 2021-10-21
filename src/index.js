import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Button from './components/button';
import Input from './App';

ReactDOM.render(<Input for="name" />, document.getElementById('input'));

ReactDOM.render(<Button active={true} title="Log in" />, document.getElementById('button'));
