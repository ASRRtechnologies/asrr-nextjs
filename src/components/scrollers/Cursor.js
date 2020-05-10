import React, {useEffect, useRef, useState} from 'react';

function Cursor(props) {

    const [cursor, useCursor ] = useState("cursor");
    const [left, useLeft] = useState(50);
    const [top, useTop] = useState(50);

    const mouseRef = useRef(null);

    useEffect(() => {
        document.addEventListener('mousemove', e => {
            mouseRef.current.style.left = `${e.pageX}px`;
            mouseRef.current.style.top = `${e.pageY}px`;
        });

        document.addEventListener('mousedown', e => {
           useCursor("cursor active")
        });

        document.addEventListener('mouseup', e => {
            useCursor("cursor")
        });

    },);

    return (
        <div ref={mouseRef} className={cursor}>


        </div>
    );
}

export default Cursor;
