import React from "react";

import styles from './layout-container.module.scss'

export interface LayoutContainerProps {
  children: React.ReactNode;
  rootClassName?: string;

  enableGrid?: boolean; // True by default.
  containerClassName?: string;
}

export const LayoutContainer: React.FC<LayoutContainerProps> = (props) => {
  const enableGrid = props.enableGrid ?? true;

  return (
    <div className={styles.root + ' ' + (props.rootClassName ?? '')}>
      <div className={styles.container + ' ' + (props.containerClassName ?? '') + ' ' + (enableGrid ? styles.grid : '')}>
        {props.children}
      </div>
    </div>
  );
};