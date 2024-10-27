import { getTabIds } from '../utils';
import { TabContentProps } from './TabContent.types';

export default function TabContent({ children, id, className }: TabContentProps) {
  const { tabId, tabContentId } = getTabIds(id);

  return (
    <div className={className} id={tabContentId} role="tabpanel" aria-labelledby={tabId}>
      {children}
    </div>
  );
}
