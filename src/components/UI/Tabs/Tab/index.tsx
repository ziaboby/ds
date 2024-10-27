import { getTabIds } from '../utils';
import styles from './Tab.module.css';
import type { TabProps } from './Tab.types';

export default function Tab({ children, id, selected, variant, ...props }: TabProps) {
  const classes = `${styles.btn} ${styles[variant]}`;
  const { tabId, tabContentId } = getTabIds(id);
  const tabIndex = selected ? 0 : -1;

  return (
    <button
      {...props}
      aria-controls={tabContentId}
      aria-selected={selected}
      className={classes}
      id={tabId}
      onKeyDown={keydownHandler}
      role="tab"
      tabIndex={tabIndex}
      type="button"
    >
      {children}
    </button>
  );
}

function keydownHandler(event: React.KeyboardEvent<HTMLButtonElement>) {
  if (['ArrowLeft', 'ArrowRight'].includes(event.key)) {
    const currentTab = event.target as HTMLButtonElement;
    if (currentTab.parentNode?.childNodes) {
      const tabs = Array.from(currentTab.parentNode?.childNodes) as HTMLButtonElement[];
      const index = tabs.findIndex((item) => item.id === currentTab.id);
      let nextIndex: number | undefined = undefined;
      if (event.key === 'ArrowLeft') {
        nextIndex = index - 1;
      }
      if (event.key === 'ArrowRight') {
        nextIndex = index === tabs.length - 1 ? 0 : index + 1;
      }
      if (nextIndex != undefined) {
        const nextTab = tabs.at(nextIndex);
        nextTab?.focus();
      }
    }
  }
}
