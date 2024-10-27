import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import Badge from '.';
import { BadgeProps } from './Badge.types';

interface TestCase extends BadgeProps {
  role: 'alert' | 'status';
}

const testCases: TestCase[] = [
  {
    variant: 'neutral',
    label: 'Label',
    role: 'status',
  },
  {
    variant: 'positive',
    label: 'Label',
    role: 'status',
  },
  {
    variant: 'negative',
    label: 'Warning',
    description: 'There was an error. Please go to your inbox for more information',
    role: 'alert',
  },
];

test.each(testCases)('should render a $variant badge', ({ variant, label, description, role }) => {
  render(<Badge variant={variant} label={label} description={description} />);

  const item = screen.getByRole(role);

  expect(item).toHaveTextContent(label);
  expect(item.className).toContain(variant);
});
