import { Placeholder } from '..';

export default {
  component: Placeholder,
  title: 'UI/Placeholder/Tablet',
  tags: ['autodocs'],
  args: {},
  parameters: {
    viewport: { defaultViewport: 'tablet' },
  },
};

export const PlaceholderSmall = {
  args: {
    size: 'small',
    width: '50%',
  },
};

export const PlaceholderMedium = {
  args: {
    size: 'medium',
    width: '50%',
  },
};

export const PlaceholderLarge = {
  args: {
    size: 'large',
    width: '50%',
  },
};
