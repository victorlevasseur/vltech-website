import Link from 'next/link';

import styles from './link-button.module.scss';
import { HTMLAttributeAnchorTarget } from 'react';

export interface LinkButtonProps {
  label: string;
  href: string;
  target?: HTMLAttributeAnchorTarget;
  variant?: 'primary' | 'secondary';
}

export const LinkButton: React.FC<LinkButtonProps> = (props) => {
  const variant = props.variant || 'primary';
  return (
    <Link
      className={styles.container + ' ' + styles[variant]}
      href={props.href}
      target={props.target}
    >
      {props.label}
    </Link>
  );
};
