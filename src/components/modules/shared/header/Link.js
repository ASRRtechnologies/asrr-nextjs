import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import headerStyles from './header.module.scss';

export default ({ href, children, ...props }) => {
  const router = useRouter();
  let className = children.props.className || '';
  if (router.pathname === href) {
    className = `${className} ${headerStyles.activeLink}`;
  }

  return (
    <Link {...props} href={href}>
      {React.cloneElement(children, { className, ariaLabel: 'active-link' })}
    </Link>
  );
};
