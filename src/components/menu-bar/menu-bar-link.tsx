import React from 'react';

import styles from './menu-bar-link.module.scss';
import Link from 'next/link';

interface MenuBarLinkProps {
  label: string;
  href: string;
  active?: boolean;
}

const MenuBarLink: React.FC<MenuBarLinkProps> = (props) => {
  return (
    <Link
      className={`${styles.container} ${props.active ? styles.active : ''}`}
      href={props.href}
    >
      {props.label}
    </Link>
  );
};

export default MenuBarLink;
