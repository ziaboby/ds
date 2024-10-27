import type { TabWrapperProps } from '../../../UI/Tabs/TabWrapper/TabWrapper.types';

export interface TabsContainerProps extends TabWrapperProps {
  /**
   * The tab that should be displayed at start
   */
  defaultTabId: string;
}
