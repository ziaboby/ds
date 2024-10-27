import { TabProps } from '../Tab/Tab.types';

export interface TabsListProps {
  /**
   * The list of tabs
   */
  children: React.ReactNode;
  /**
   * The id of the label, describing the tabs purpose
   */
  labelId: string;
  /**
   * The UI variant of the tab
   */
  variant: TabProps['variant'];
}
