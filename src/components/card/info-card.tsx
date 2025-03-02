import React from "react";

import styles from './info-card.module.scss';
import {LinkButton} from "@/components/button/link-button";

export interface InfoCardLink {
  href: string;
  label: string;
}

export interface InfoCardProps {
  title: string;
  children?: React.ReactNode;

  className?: string;

  link?: InfoCardLink;

  fullHeight?: boolean;
}

export const InfoCard: React.FC<InfoCardProps> = (props) => {
  return (
    <div className={`${styles.container} ${props.className} ${props.fullHeight ? styles.fullheight : ''}`}>
      <h2>{props.title}</h2>
      {props.children}
      {
        props.link ?
          (<div className={styles.linkContainer}>
            <LinkButton label={props.link.label} href={props.link.href} variant={'secondary'} />
          </div>) :
          null
      }
    </div>
  );
}