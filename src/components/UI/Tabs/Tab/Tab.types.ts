export interface TabProps {
  /**
   * The content of the tab, any (children) element will be rendered on the same row
   */
  children: React.ReactNode;
  /**
   * The ID which matches the tab with the content
   */
  id: string;
  /**
   * If true, the tab will be in selected mode
   */
  selected: boolean;
  /**
   * The UI variant of the tab
   */
  variant: 'pill' | 'underline';
  /**
   * The callback is called when the tab is clicked
   */
  onClick?: () => void;
}
