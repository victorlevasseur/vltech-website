"use client"

import styles from './header.module.scss';
import {LayoutContainer} from "@/components/layout/layout-container";
import Image from "next/image";
import MenuBarLink from "@/components/menu-bar/menu-bar-link";
import {usePathname} from "next/navigation";

export const Header: React.FC = () => {
  const pathname = usePathname();
  console.log(pathname);
  const isActive = (href: string) => pathname === href;

  return (
    <nav className={styles.header} aria-label="main-header">
      <LayoutContainer containerClassName={styles.headerContainer} enableGrid={false}>
        <div className={styles.logoContainer}>
          <Image src={'/assets/vltech_logo.png'} alt={'Victor Levasseur Tech'} width={64} height={64} />
          <span className={'hide-smaller-large'}>Victor<br />Levasseur<br />Tech</span>
        </div>
        <div className={styles.linksContainer}>
          <MenuBarLink label={'Accueil'} href={'/'} active={isActive('/')} />
        </div>
      </LayoutContainer>
    </nav>
  );
}