import React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'

export default ({href, children, special, ...props}) => {
    const router = useRouter();
    let className = children.props.className || '';
    if (router.pathname === href) {
        className = `${className} active-link`
    }

    return <Link {...props} href={href}>{React.cloneElement(children, {className})}</Link>
}
