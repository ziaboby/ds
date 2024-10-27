import Tab from '../Tab';
import { Label } from './utils';

export default {
  component: Tab,
  decorators: [
    // @ts-expect-error any type
    (Story) => (
      <div role="tablist">
        <Story />
      </div>
    ),
  ],
  title: 'UI/Tabs/Tab Mobile',
  tags: ['autodocs'],
  args: { children: <Label /> },
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
};

export {
  PillDefaultSelected,
  PillHoverSelected,
  PillActiveSelected,
  PillFocusSelected,
  PillDefault,
  PillHover,
  PillActive,
  PillFocus,
  UnderlineDefaultSelected,
  UnderlineHoverSelected,
  UnderlineActiveSelected,
  UnderlineFocusSelected,
  UnderlineDefault,
  UnderlineHover,
  UnderlineActive,
  UnderlineFocus,
} from './Tab.stories';
