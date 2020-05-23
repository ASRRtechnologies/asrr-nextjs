import React, {Component} from 'react';
import styled from "@emotion/styled";
// import AOS from "aos";

const Wrapper = styled("div")`
	h2{color:${props => props.theme.fonts.text};}
	label{color:${props => props.theme.fonts.text};}
`;

class Input extends Component {
    constructor(props) {
        super(props);
        this.placeholder = React.createRef();
    }

    renderState = (props) => {
        //Check if the state props exist and return it as string for className
        for (let prop in props) {
            switch (Object.prototype.hasOwnProperty.call(props, prop)) {
                case props.success:
                    return "success";
                case props.error :
                    return "error";
                case props.disabled :
                    return "disabled";
                default: return "asrr-input-label";
            }
        }
    };

    render() {
        const {hidden, placeholder, label, ...rest} = this.props;
        return (
            // <div style={{width:"100%"}}data-aos={animation} data-aos-once="true" data-aos-delay={delay}>
                <Wrapper key={this.props.key} className={`asrr-input-container ${hidden}`}>
                    {this.props.text ?
                        (<React.Fragment>
                                <label  className={`asrr-input-label ${this.renderState(this.props)}`}>{label}</label>
                                <input ref={this.placeholder} className={`asrr-input ${this.renderState(this.props)}`}
                                       {...rest}
                                       onFocus={() => {this.placeholder.current.placeholder = " "}}
                                       onBlur={() => {this.placeholder.current.placeholder = placeholder}}/>
                            </React.Fragment>
                        ) :
                        (
                            <React.Fragment>
                                <label className={`asrr-input-label ${this.renderState(this.props)}`}>{label}</label>
                                <textarea ref={this.placeholder} className={`asrr-input ${this.renderState(this.props)}`}
                                          {...rest}
                                          onFocus={() => {this.placeholder.current.placeholder = " "}}
                                          onBlur={() => {this.placeholder.current.placeholder = placeholder}}
                                          placeholder={placeholder}/>
                            </React.Fragment>
                        )
                    }
                </Wrapper>
            // </div>
        );
    }
}

export default Input;