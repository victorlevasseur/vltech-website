import React from 'react';

import styles from './menu-bar-link.module.scss';
import Link from 'next/link';

export interface MenuBarLinkProps {
  label: string;
  active?: boolean;
  href: string;
  onClick?: () => void;
}

const MenuBarLink: React.FC<MenuBarLinkProps> = (props) => {
  return (
    <Link
      className={`${styles.container} ${props.active ? styles.active : ''}`}
      href={props.href}
      onClick={props.onClick}
      data-testid={'link'}
    >
      {props.label}
    </Link>
  );
};

export default MenuBarLink;
