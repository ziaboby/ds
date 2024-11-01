import Tab from '..';
import { Label, Wrapper } from './utils';

export default {
  component: Tab,
  decorators: [
    // @ts-expect-error any type
    (Story, { args }) => (
      <Wrapper id={args.id}>
        <Story />
      </Wrapper>
    ),
  ],
  title: 'UI/Tabs/Tab/Tablet',
  tags: ['autodocs'],
  args: { children: <Label /> },
  parameters: {
    viewport: { defaultViewport: 'tablet' },
  },
};

export const PillDefaultSelected = {
  args: {
    id: '2',
    selected: true,
    variant: 'pill',
  },
};

export const PillHoverSelected = {
  args: {
    id: '4',
    selected: true,
    variant: 'pill',
  },
  parameters: { pseudo: { hover: true } },
};

export const PillActiveSelected = {
  args: {
    id: '6',
    selected: true,
    variant: 'pill',
  },
  parameters: { pseudo: { active: true } },
};

export const PillFocusSelected = {
  args: {
    id: '8',

    selected: true,
    variant: 'pill',
  },
  parameters: { pseudo: { focus: true } },
};

export const PillDefault = {
  args: {
    id: '1',
    selected: false,
    variant: 'pill',
  },
};

export const PillHover = {
  args: {
    id: '3',
    selected: false,
    variant: 'pill',
  },
  parameters: { pseudo: { hover: true } },
};

export const PillActive = {
  args: {
    id: '5',
    selected: false,
    variant: 'pill',
  },
  parameters: { pseudo: { active: true } },
};

export const PillFocus = {
  args: {
    id: '7',
    selected: false,
    variant: 'pill',
  },
  parameters: { pseudo: { focus: true } },
};

export const UnderlineDefaultSelected = {
  args: {
    id: '10',
    selected: true,
    variant: 'underline',
  },
};

export const UnderlineHoverSelected = {
  args: {
    id: '12',
    selected: true,
    variant: 'underline',
  },
  parameters: { pseudo: { hover: true } },
};

export const UnderlineActiveSelected = {
  args: {
    id: '14',
    selected: true,
    variant: 'underline',
  },
  parameters: { pseudo: { active: true } },
};

export const UnderlineFocusSelected = {
  args: {
    id: '16',
    selected: true,
    variant: 'underline',
  },
  parameters: { pseudo: { focus: true } },
};

export const UnderlineDefault = {
  args: {
    id: '9',
    selected: false,
    variant: 'underline',
  },
};

export const UnderlineHover = {
  args: {
    id: '11',
    selected: false,
    variant: 'underline',
  },
  parameters: { pseudo: { hover: true } },
};

export const UnderlineActive = {
  args: {
    id: '13',
    selected: false,
    variant: 'underline',
  },
  parameters: { pseudo: { active: true } },
};

export const UnderlineFocus = {
  args: {
    id: '15',
    selected: false,
    variant: 'underline',
  },
  parameters: { pseudo: { focus: true } },
};
