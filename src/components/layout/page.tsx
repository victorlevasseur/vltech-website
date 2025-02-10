import styles from './page.module.scss';

export interface PageProps {
  children: React.ReactNode;
}

export const Page = ({ children }: PageProps) => {
  return (
    <main className={styles.main}>
      {children}
    </main>
  );
}