import Tab from '../Tab';
import { Label } from './utils';

export default {
  component: Tab,
  title: 'UI/Tabs/Tab',
  tags: ['autodocs'],
  args: { children: <Label /> },
  parameters: {
    viewport: { defaultViewport: 'tablet' },
  },
};

export const PillDefault = {
  args: {
    selected: false,
    variant: 'pill',
  },
};

export const PillDefaultSelected = {
  args: {
    props: {
      selected: true,
      variant: 'pill',
    },
  },
};

export const PillHover = {
  args: {
    selected: false,
    variant: 'pill',
  },
  parameters: { pseudo: { hover: true } },
};

export const PillHoverSelected = {
  args: {
    selected: true,
    variant: 'pill',
  },
  parameters: { pseudo: { hover: true } },
};

export const PillActive = {
  args: {
    selected: false,
    variant: 'pill',
  },
  parameters: { pseudo: { active: true } },
};

export const PillActiveSelected = {
  args: {
    selected: true,
    variant: 'pill',
  },
  parameters: { pseudo: { active: true } },
};

export const PillFocus = {
  args: {
    selected: false,
    variant: 'pill',
  },
  parameters: { pseudo: { focus: true } },
};

export const PillFocusSelected = {
  args: {
    props: {
      selected: true,
      variant: 'pill',
    },
  },
  parameters: { pseudo: { focus: true } },
};

export const UnderlineDefault = {
  args: {
    selected: false,
    variant: 'underline',
  },
};

export const UnderlineDefaultSelected = {
  args: {
    selected: true,
    variant: 'underline',
  },
};

export const UnderlineHover = {
  args: {
    selected: false,
    variant: 'underline',
  },
  parameters: { pseudo: { hover: true } },
};

export const UnderlineHoverSelected = {
  args: {
    selected: true,
    variant: 'underline',
  },
  parameters: { pseudo: { hover: true } },
};

export const UnderlineActive = {
  args: {
    selected: false,
    variant: 'underline',
  },
  parameters: { pseudo: { active: true } },
};

export const UnderlineActiveSelected = {
  args: {
    selected: true,
    variant: 'underline',
  },
  parameters: { pseudo: { active: true } },
};

export const UnderlineFocus = {
  args: {
    selected: false,
    variant: 'underline',
  },
  parameters: { pseudo: { focus: true } },
};

export const UnderlineFocusSelected = {
  args: {
    selected: true,
    variant: 'underline',
  },
  parameters: { pseudo: { focus: true } },
};
