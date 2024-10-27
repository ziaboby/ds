import { fireEvent, render, screen } from '@testing-library/react';
import { expect, test, vi } from 'vitest';
import Tab from './Tab';

test('should render', () => {
  render(
    <Tab variant="pill" selected={true} id="1">
      Label
    </Tab>,
  );

  const tab = screen.getByRole('tab');
  expect(tab).toHaveTextContent('Label');
  expect(tab.className).toContain('pill');
  expect(tab.id).toBe('tab-1');
  expect(tab).toHaveAttribute('aria-selected', 'true');
});

test('should call the `onClick` prop when clicking the button', () => {
  const onClick = vi.fn();
  render(
    <Tab variant="pill" selected={true} id="1" onClick={onClick}>
      Label
    </Tab>,
  );

  const tab = screen.getByRole('tab');
  fireEvent.click(tab);
  expect(onClick).toHaveBeenCalled();
});
