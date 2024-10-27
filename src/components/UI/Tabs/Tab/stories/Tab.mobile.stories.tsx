import Tab from '../Tab';
import { Label } from './utils';

export default {
  component: Tab,
  title: 'UI/Tabs/Tab Mobile',
  tags: ['autodocs'],
  args: { children: <Label /> },
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
};

export {
  PillDefault,
  PillDefaultSelected,
  PillHover,
  PillHoverSelected,
  PillActive,
  PillActiveSelected,
  PillFocus,
  PillFocusSelected,
  UnderlineDefault,
  UnderlineDefaultSelected,
  UnderlineHover,
  UnderlineHoverSelected,
  UnderlineActive,
  UnderlineActiveSelected,
  UnderlineFocus,
  UnderlineFocusSelected,
} from './Tab.stories';
