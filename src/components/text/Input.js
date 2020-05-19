import React, {useEffect, useRef, useState} from 'react';
import TextField from '@material-ui/core/TextField';

function Input(props) {

    const [focused, setFocus] = useState(false);
    const [value, setValue] = useState("");

    const handleChange = (e) => {
        setValue(e.target.value)
    };

    const textNode = useRef();

    useEffect(() => {
        console.log(textNode.current);
        console.log(value)
    });

    return (
        <form>
            <TextField id="standard-basic" label="Standard" />

        </form>
    );
}

export default Input;