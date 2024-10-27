import styles from './Placeholder.module.css';
import type { PlaceholderProps } from './Placeholder.types';

export function Placeholder({ size, width }: PlaceholderProps) {
  const classes = `${styles.box} ${styles[size]}`;

  return <div className={classes} style={{ width }} />;
}
