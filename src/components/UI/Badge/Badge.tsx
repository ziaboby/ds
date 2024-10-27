import styles from './Badge.module.css';
import { BadgeProps } from './Badge.types';

export default function Badge({ label, variant, description }: BadgeProps) {
  const classes = `${styles.w} ${styles[variant]}`;
  const role = variant === 'negative' ? 'alert' : 'status';

  return (
    <div className={classes} aria-label={description} role={role}>
      {label}
    </div>
  );
}
