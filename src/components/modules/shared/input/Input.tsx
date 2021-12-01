import React from 'react';
import inputStyles from './style.module.scss';

interface InputProps {
  label: string;
  [x: string]: any;
}
function Input(props: InputProps) {
  const { label, ...inputProps } = props;

  return (
    <div className={inputStyles.inputWrapper}>
      <label>{props.label}</label>
      <input {...inputProps} />
    </div>
  );
}

export default Input;
