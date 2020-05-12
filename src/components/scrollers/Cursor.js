import React, {Component} from 'react';

class Cursor extends Component {
    constructor(props){
        super(props);
        this.mouseRef = React.createRef();
        this.state = {
            cursor:"cursor"
        }
    }

    componentDidMount(){

        document.addEventListener('mousemove', e => {
            //Change style via ref instead of setting style property with state to limit rerender otherwise it will be laggy.
            this.mouseRef.current.style.left = `${e.clientX}px`;
            this.mouseRef.current.style.top = `${e.clientY}px`;
        });

        document.addEventListener('mousedown', e => {
            this.setState({cursor:"cursor active"})
        });

        document.addEventListener('mouseup', e => {
            this.setState({cursor:"cursor"})
        });

    }


    render() {
        return (
            <div ref={this.mouseRef} className={this.state.cursor}>

            </div>
        );
    }
}

export default Cursor;
