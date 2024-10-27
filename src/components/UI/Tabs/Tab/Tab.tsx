import { getTabIds } from '../utils';
import styles from './Tab.module.css';
import type { TabProps } from './Tab.types';

export default function Tab({ children, id, selected, variant, ...props }: TabProps) {
  const classes = `${styles.btn} ${styles[variant]}`;
  const { tabId, tabContentId } = getTabIds(id);

  return (
    <button
      {...props}
      aria-controls={tabContentId}
      aria-selected={selected}
      className={classes}
      id={tabId}
      role="tab"
      type="button"
    >
      {children}
    </button>
  );
}
