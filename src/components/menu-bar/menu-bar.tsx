import {LayoutContainer} from "@/components/layout/layout-container";
import Image from "next/image";
import MenuBarLink from "@/components/menu-bar/menu-bar-link";

import styles from './menu-bar.module.scss';

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
  return (
    <nav className={styles.header} aria-label="main-header">
      <LayoutContainer
        containerClassName={styles.headerContainer}
        enableGrid={false}
      >
        <div className={styles.logoContainer}>
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
        </div>
        <div className={'hide-smaller-large ' + styles.linksContainer}>
          {
            items.map((item) => (
              <MenuBarLink
                key={item.id}
                label={item.label}
                href={item.href}
                active={item.onlyRootPageActive ?
                  item.href === currentPathname :
                  (currentPathname?.startsWith(item.href) ?? false)} />
            ))
          }
        </div>
      </LayoutContainer>
    </nav>
  );
}
