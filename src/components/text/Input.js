import React, {useRef} from 'react';

function Input(props) {

    const placeholderRef = useRef(null);
    const {hidden, textArea, placeholder, label, className, ...rest} = props;

    return (
        <div className={`input-container`}>
            {textArea ?
                (
                    <React.Fragment>
                        <label className={`input-label`}>{label}</label>
                        <textarea {...rest} ref={placeholderRef} className={`input`}
                                  onFocus={() => placeholderRef.current.placeholder = " "}
                                  onBlur={() => placeholderRef.current.placeholder = placeholder}
                                  placeholder={placeholder}/>
                    </React.Fragment>
                ) :
                (
                    <React.Fragment>
                        <label className={`input-label`}>{label}</label>
                        <input {...rest} ref={placeholderRef} className={`input`}
                               onFocus={() => placeholderRef.current.placeholder = " "}
                               placeholder={placeholder}
                               onBlur={() => placeholderRef.current.placeholder = placeholder}/>
                    </React.Fragment>
                )
            }
        </div>
    );
}

export default Input;
