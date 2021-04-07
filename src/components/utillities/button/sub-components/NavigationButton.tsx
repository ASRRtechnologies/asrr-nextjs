import React from 'react';
import {NavigationButtonProps} from "@/utillities/button/types";
import Link from "next/link";

function NavigationButton(props: NavigationButtonProps) {
    const {to, text, type} = props;
    return (
        <div>
            <Link href={to}>
                <a>
                    {text}
                </a>
            </Link>
        </div>
    );
}

export default NavigationButton;
