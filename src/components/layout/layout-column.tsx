import styles from './layout-column.module.scss';

export interface LayoutColumnProps {
  children: React.ReactNode;
  className?: string;

  small?: number;
  medium?: number;
  large?: number
}

export const LayoutColumn: React.FC<LayoutColumnProps> = (props) => {
  const {small = 1, medium, large} = props;

  return (
    <div 
      className={
        (large ? styles['col-large-' + large] : '') + ' ' +
        (medium ? styles['col-medium-' + medium] : '') + ' ' +
        styles['col-small-' + small] + ' ' +
        ' ' + (props.className ?? '')}>
      {props.children}
    </div>
  );
}