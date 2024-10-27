export interface TabContentProps {
  /**
   * The content of the tab, any (children) element will be rendered on the same row
   */
  children: React.ReactNode;
  /**
   * The ID which matches the tab with the content
   */
  id: string;
  /**
   * Additional classname to apply customisation
   */
  className?: string;
}
