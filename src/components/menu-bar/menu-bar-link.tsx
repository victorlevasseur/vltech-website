import React from 'react';

import styles from './menu-bar-link.module.scss';
import Link from 'next/link';
import {hasProperty} from "@vitest/expect";

export type MenuBarLinkProps = {
  label: string;
  active?: boolean;
  href: string;
}


const MenuBarLink: React.FC<MenuBarLinkProps> = (props) => {
  return (
    <Link
      className={`${styles.container} ${props.active ? styles.active : ''}`}
      href={props.href}
      data-testid={'link'}
    >
      {props.label}
    </Link>
  );
};

export default MenuBarLink;
