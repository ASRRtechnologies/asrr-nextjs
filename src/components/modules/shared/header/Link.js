import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import headerStyles from './header.module.scss';

export default function CustomLink({ href, children, ...props }) {
  const router = useRouter();
  let className = children.props.className || '';
  if (router.pathname === href) {
    className = `${className} ${headerStyles.activeLink}`;
  }

  return (
    <Link {...props} href={href}>
      {React.cloneElement(children, { className, 'aria-label': 'active-link' })}
    </Link>
  );
}
