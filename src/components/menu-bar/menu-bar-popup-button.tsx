import React from 'react';
import styles from '@/components/menu-bar/menu-bar-popup-button.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';

export interface MenuBarPopupButtonProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export const MenuBarPopupButton: React.FC<MenuBarPopupButtonProps> = (
  props
) => {
  return (
    <button
      className={`${styles.container} ${props.active ? styles.active : ''}`}
      type={'button'}
      aria-haspopup={'menu'}
      onClick={props.onClick}
    >
      <FontAwesomeIcon
        icon={props.active ? faClose : faBars}
        size={'1x'}
        fixedWidth={true}
      />{' '}
      {props.label}
    </button>
  );
};
