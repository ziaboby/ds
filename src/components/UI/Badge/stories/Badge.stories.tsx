import Tab from '../../Tabs/Tab';
import Badge from '..';

export default {
  component: Badge,
  title: 'UI/Badge/Tablet',
  tags: ['autodocs'],
  args: {},
  parameters: {
    viewport: { defaultViewport: 'tablet' },
  },
};

export const BadgeNeutral = {
  args: {
    label: 'Badge',
    variant: 'neutral',
  },
};

export const BadgeNegative = {
  args: {
    label: 'Badge',
    variant: 'negative',
  },
};

export const BadgePositive = {
  args: {
    label: 'Badge',
    variant: 'positive',
  },
};

export const BadgeNegativeInsideTab = {
  args: {
    label: 'Warning',
    variant: 'negative',
  },
  decorators: [
    // @ts-expect-error any type
    (Story) => (
      <div role="tablist">
        <Tab variant="pill" selected={false} id="1">
          Files <Story />
        </Tab>
      </div>
    ),
  ],
};
