import TabsList from '..';
import { Label, TabContents } from './utils';

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
        <TabContents />
      </>
    ),
  ],
};

export { Pill, Underline, PillWithBadge, UnderlineWithBadge } from './TabsList.stories';
