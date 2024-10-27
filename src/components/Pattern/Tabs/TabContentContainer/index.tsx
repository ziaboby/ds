import type { TabContentProps } from '../../../UI/Tabs/TabContent/TabContent.types';
import Tabs from '../../../UI/Tabs/Tabs';
import { useTabsContext } from '../TabsContext';

export default function TabContentContainer(props: TabContentProps) {
  const { currentTabId } = useTabsContext();
  const isSelected = props.id === currentTabId;

  return <Tabs.TabContent {...props}>{isSelected ? props.children : null}</Tabs.TabContent>;
}
