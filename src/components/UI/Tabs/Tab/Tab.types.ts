export interface TabProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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
}
