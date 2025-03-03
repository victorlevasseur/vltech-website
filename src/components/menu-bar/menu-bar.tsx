import {LayoutContainer} from "@/components/layout/layout-container";
import Image from "next/image";
import MenuBarLink from "@/components/menu-bar/menu-bar-link";

import styles from './menu-bar.module.scss';
import {MenuBarPopupButton} from "@/components/menu-bar/menu-bar-popup-button";
import {useCallback, useMemo, useState} from "react";
import ReactModal from "react-modal";
import {firaCode, firaSans} from "@/fonts";
import Link from "next/link";

export interface MenuBarItem {
  id: string;
  href: string;
  label: string;

  onlyRootPageActive?: boolean
}

export interface MenuBarProps {
  items: MenuBarItem[];
  currentPathname?: string;
}

export const MenuBar: React.FC<MenuBarProps> = ({items, currentPathname}) => {
  const currentActiveItem = items.find((item) => item.onlyRootPageActive ?
    item.href === currentPathname :
    (currentPathname?.startsWith(item.href) ?? false));

  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const openMobileMenu = useCallback(() => {
    setMobileNavOpen(true);
  }, [setMobileNavOpen]);

  const closeMobileMenu = useCallback(() => {
    setMobileNavOpen(false);
  }, [setMobileNavOpen]);

  const allLinks = useMemo(() => {
    return items.map((item) => (
      <MenuBarLink
        key={item.id}
        label={item.label}
        href={item.href}
        onClick={closeMobileMenu}
        active={item.id === currentActiveItem?.id} />
    ));
  }, [items, closeMobileMenu, currentActiveItem?.id])

  return (
    <nav className={styles.header} aria-label="main-header">
      <LayoutContainer
        containerClassName={styles.headerContainer}
        enableGrid={false}
      >
        <Link className={styles.logoContainer} href={'/'}>
          <Image
            quality={95}
            priority={true}
            src={'/assets/vltech_logo.png'}
            alt={'Victor Levasseur Tech'}
            width={64}
            height={64}
          />
          <span className={'hide-smaller-medium'}>
            Victor
            <br />
            Levasseur
            <br />
            Tech
          </span>
        </Link>
        <div className={'hide-smaller-large ' + styles.linksContainer}>
          { allLinks }
        </div>
        <div className={'hide-larger-or-eq-large ' + styles.linksContainer}>
          <MenuBarPopupButton
            label={currentActiveItem?.label ?? 'Naviguer'}
            onClick={openMobileMenu} />
          <ReactModal
            ariaHideApp={false}
            portalClassName={`${firaSans.variable} ${firaCode.variable}`}
            isOpen={mobileNavOpen}
            contentLabel={'Naviguer vers...'}
            onRequestClose={closeMobileMenu}>
            <div className={styles.mobileMenuContainer}>
              { allLinks }
            </div>
          </ReactModal>
        </div>
      </LayoutContainer>
    </nav>
  );
}
