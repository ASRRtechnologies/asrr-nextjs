import React from 'react';
import Link from "next/link";

function ReadMore({to, text, action, ...rest}) {
    return (

        action ? (<p {...rest} className="read-more">
                {text}
            </p>)
            :
            (
                <Link href={to}>
                    <a className="read-more">
                        {text}
                    </a>
                </Link>)

    );
}

export default ReadMore;