import Badge from '../Badge';

export default {
  component: Badge,
  title: 'UI/Badge/Mobile',
  tags: ['autodocs'],
  args: {},
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
};

export {
  BadgeNeutral,
  BadgeNegative,
  BadgePositive,
  BadgeNegativeInsideTab,
} from './Badge.stories';
