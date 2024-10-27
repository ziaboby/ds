import { fireEvent, render, screen } from '@testing-library/react';
import { expect, test, vi } from 'vitest';
import Tabs from './Tabs';
import { getTabIds } from './utils';

const ids = ['1', '2', '3'];

function TestComponent({ onClick }: { onClick?: () => void }) {
  return (
    <Tabs.Wrapper>
      <span id="test">This is for a test</span>
      <Tabs.TabsList variant="pill" labelId="test">
        {ids.map((item) => (
          <Tabs.Tab
            key={getTabIds(item).tabId}
            variant="pill"
            selected={item === '1'}
            id={item}
            onClick={onClick}
          >
            Label {item}
          </Tabs.Tab>
        ))}
      </Tabs.TabsList>
      {ids.map((item) => (
        <Tabs.TabContent key={getTabIds(item).tabContentId} id={item}>
          This is the content for tab {item}
        </Tabs.TabContent>
      ))}
    </Tabs.Wrapper>
  );
}

test('should render', () => {
  render(<TestComponent />);

  expect(screen.getByRole('tablist')).toBeInTheDocument();
  expect(screen.getAllByRole('tab')).toHaveLength(3);
  expect(screen.getAllByRole('tabpanel')).toHaveLength(3);
});

test('should call the callback when clicking a tab', () => {
  const onClickSpy = vi.fn();

  render(<TestComponent onClick={onClickSpy} />);

  const { tabId } = getTabIds(ids[0]);
  const tab = screen.getByRole('tab', { name: `Label ${ids[0]}` });
  expect(tab).toHaveAttribute('id', tabId);

  fireEvent.click(tab);

  expect(onClickSpy).toHaveBeenCalled();
});
