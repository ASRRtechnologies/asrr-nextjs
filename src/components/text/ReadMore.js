import React from 'react';
import Link from "next/link";

function ReadMore({to, text}) {
    return (
        <Link href={to}>
            <a className="read-more">
                {text}
            </a>
        </Link>
    );
}

export default ReadMore;