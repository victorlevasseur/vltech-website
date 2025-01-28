import React from "react";

import styles from "./menu-bar-link.module.scss";

interface MenuBarLinkProps {
  label: string;
  href: string;
  active?: boolean;
}

const MenuBarLink: React.FC<MenuBarLinkProps> = (props) => {
  return (
    <a
      className={`${styles.container} ${props.active ? styles.active : ''}`}
      href={props.href}
    >
      {props.label}
    </a>
  );
};

export default MenuBarLink;
