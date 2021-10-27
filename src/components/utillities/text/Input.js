import React, { useRef } from 'react';
import styled from '@emotion/styled';

const InputWrapper = styled(`input`)`
  color: ${(props) => props.theme.fonts.title};
  border-bottom: solid 3px ${(props) => props.theme.fonts.title};
`;

const TextArea = styled(`textarea`)`
  color: ${(props) => props.theme.fonts.title};
  border-bottom: solid 3px ${(props) => props.theme.fonts.title};
`;

function Input(props) {
  const placeholderRef = useRef(null);
  const { textArea, placeholder, label, button, action, ...rest } = props;
  return (
    <div className={`input-container`}>
      {button ? (
        <p className="input-button" onClick={action}>
          {button}
        </p>
      ) : null}
      {textArea ? (
        <React.Fragment>
          <label className={`input-label`}>{label}</label>
          <TextArea
            {...rest}
            ref={placeholderRef}
            className={`${button && 'input-button-padding'}`}
            onFocus={() => (placeholderRef.current.placeholder = ' ')}
            onBlur={() => (placeholderRef.current.placeholder = placeholder)}
            placeholder={placeholder}
          />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <label className={`input-label`}>{label}</label>
          <InputWrapper
            {...rest}
            ref={placeholderRef}
            className={`${button && 'input-button-padding'}`}
            onFocus={() => (placeholderRef.current.placeholder = ' ')}
            placeholder={placeholder}
            onBlur={() => (placeholderRef.current.placeholder = placeholder)}
          />
        </React.Fragment>
      )}
    </div>
  );
}

export default Input;
