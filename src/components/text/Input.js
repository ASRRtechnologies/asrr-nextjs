import React, {useRef} from 'react';
import styled from "@emotion/styled";

function Input(props) {

    const placeholderRef = useRef(null);
    const {hidden, textArea, placeholder, label, className, last, ...rest} = props;

    const Wrapper = styled('section')`
        color: ${props => props.theme.fonts.title};
        `;

    return (
        <Wrapper className={`input-container ${last && "last"}`}>
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
        </Wrapper>
    );
}

export default Input;
