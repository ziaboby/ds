import TabsList from '..';
import { Label } from './utils';

export default {
  component: TabsList,
  title: 'UI/Tabs/List/Mobile',
  tags: ['autodocs'],
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
  decorators: [
    // @ts-expect-error any type
    (Story) => (
      <>
        <Label />
        <Story />
      </>
    ),
  ],
};

export { Pill, Underline, PillWithBadge, UnderlineWithBadge } from './TabsList.stories';
