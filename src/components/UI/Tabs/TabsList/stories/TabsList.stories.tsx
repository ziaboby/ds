import TabsList from '../TabsList';
import { Label, Sample, SampleWithBadge } from './utils';

export default {
  component: TabsList,
  title: 'UI/Tabs/List/Tablet',
  tags: ['autodocs'],
  parameters: {
    viewport: { defaultViewport: 'tablet' },
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

export const Pill = {
  args: {
    labelId: 'example',
    children: <Sample variant="pill" />,
    variant: 'pill',
  },
};

export const Underline = {
  args: {
    labelId: 'example',
    children: <Sample variant="underline" />,
    variant: 'underline',
  },
};

export const PillWithBadge = {
  args: {
    labelId: 'example',
    children: <SampleWithBadge variant="pill" />,
    variant: 'pill',
  },
};

export const UnderlineWithBadge = {
  args: {
    labelId: 'example',
    children: <SampleWithBadge variant="underline" />,
    variant: 'underline',
  },
};
