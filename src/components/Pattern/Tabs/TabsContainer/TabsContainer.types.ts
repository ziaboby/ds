export interface TabsContainerProps {
  /**
   * The tabs and tabs content components
   */
  children: React.ReactNode;
  /**
   * The tab that should be displayed at start
   */
  defaultTabId: string;
}
