import { HTMLAttributeAnchorTarget } from 'react';
import Link from 'next/link';

import styles from './link-button.module.scss';

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
      className={['no-link-style', styles.container, styles[variant]].join(' ')}
      href={props.href}
      target={props.target}
    >
      {props.label}
    </Link>
  );
};
