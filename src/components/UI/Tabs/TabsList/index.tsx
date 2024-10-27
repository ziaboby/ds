import styles from './TabsList.module.css';
import { TabsListProps } from './TabsList.types';

export default function TabsList({ children, labelId, variant }: TabsListProps) {
  const classes = `${styles.w} ${styles[variant]}`;

  return (
    <div aria-labelledby={labelId} className={classes} role="tablist">
      {children}
    </div>
  );
}
