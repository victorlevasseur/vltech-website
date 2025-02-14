import styles from './header.module.scss';
import {LayoutContainer} from "@/components/layout/layout-container";
import Image from "next/image";

export const Header: React.FC<void> = () => {
  return (
    <nav className={styles.header} aria-label="main-header">
      <LayoutContainer containerClassName={styles.headerContainer} enableGrid={false}>
        <div className={styles.logoContainer}>
          <Image src={'/assets/vltech_logo.png'} alt={'Victor Levasseur Tech'} width={64} height={64} />
          <span>Victor<br />Levasseur<br />Tech</span>
        </div>
        <div>LINKS</div>
      </LayoutContainer>
    </nav>
  );
}