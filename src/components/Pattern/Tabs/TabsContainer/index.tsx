import { useState } from 'react';
import Tabs from '../../../UI/Tabs';
import { TabsContextProvider, type TabsContextType } from '../TabsContext';
import type { TabsContainerProps } from './TabsContainer.types';

export default function TabsContainer({ children, defaultTabId }: TabsContainerProps) {
  const [currentTabId, setCurrentTab] = useState<TabsContextType['currentTabId']>(defaultTabId);

  return (
    <TabsContextProvider value={{ currentTabId, setCurrentTab }}>
      <Tabs.Wrapper>{children}</Tabs.Wrapper>
    </TabsContextProvider>
  );
}
