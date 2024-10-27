import type { TabProps } from '../../../UI/Tabs/Tab/Tab.types';
import Tabs from '../../../UI/Tabs/Tabs';
import { useTabsContext } from '../TabsContext';

export default function TabContainer(props: Omit<TabProps, 'selected' | 'onClick'>) {
  const { currentTabId, setCurrentTab } = useTabsContext();
  const isSelected = props.id === currentTabId;
  const onClickTab = !isSelected ? () => setCurrentTab(props.id) : undefined;

  return (
    <Tabs.Tab {...props} selected={isSelected} onClick={onClickTab}>
      {props.children}
    </Tabs.Tab>
  );
}
