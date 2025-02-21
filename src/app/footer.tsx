import styles from './footer.module.scss';
import { LayoutContainer } from '@/components/layout/layout-container';
import { LayoutColumn } from '@/components/layout/layout-column';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <LayoutContainer containerClassName={styles.footerContainer}>
        <LayoutColumn small={12} medium={4} large={4}>
          <ul>
            <li>
              Victor Levasseur Tech
              <br />
              SASU au capital de 10 000 €<br />
              RCS PARIS 940396880
            </li>
            <li>
              <a href={'/cgv'}>CGV</a>
            </li>
          </ul>
        </LayoutColumn>
        <LayoutColumn
          className={'hide-smaller-large'}
          small={0}
          medium={0}
          large={4}
        >
          <></>
        </LayoutColumn>
        <LayoutColumn small={12} medium={8} large={4}>
          <ul>
            <li>
              <a href={'https://github.com/victorlevasseur'}>GitHub</a>
            </li>
            <li>
              <a href={'https://www.linkedin.com/in/levasseurvictor/'}>
                LinkedIn
              </a>
            </li>
            <li>
              <a href={'https://www.malt.fr/profile/victorlevasseur2'}>Malt</a>
            </li>
          </ul>
        </LayoutColumn>
      </LayoutContainer>
    </footer>
  );
};
