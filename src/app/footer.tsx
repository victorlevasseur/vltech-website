import styles from './footer.module.scss';
import {LayoutContainer} from "@/components/layout/layout-container";

export const Footer: React.FC<void> = () => {
  return (
    <footer className={styles.footer}>
      <LayoutContainer enableGrid={false}>
        FOOTER
      </LayoutContainer>
    </footer>
  )
}