import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import Tabs from '.';
import { getTabIds } from '../../UI/Tabs/utils';

const ids = ['1', '2', '3'];

function TestComponent({ tabId }: { tabId: string }) {
  return (
    <Tabs.Wrapper defaultTabId={tabId}>
      <span id="test">This is for a test</span>
      <Tabs.TabsList variant="pill" labelId="test">
        {ids.map((item) => (
          <Tabs.Tab key={getTabIds(item).tabId} variant="pill" id={item}>
            Label {item}
          </Tabs.Tab>
        ))}
      </Tabs.TabsList>
      {ids.map((item) => (
        <Tabs.TabContent key={getTabIds(item).tabContentId} id={item}>
          Content {item}
        </Tabs.TabContent>
      ))}
    </Tabs.Wrapper>
  );
}

describe('Tabs Pattern', () => {
  test('should render', () => {
    render(<TestComponent tabId={ids[0]} />);

    expect(screen.getByRole('tablist')).toBeInTheDocument();
    expect(screen.getAllByRole('tab')).toHaveLength(3);
    expect(screen.getAllByRole('tabpanel')).toHaveLength(3);
    expect(screen.getByRole('tab', { name: `Label ${ids[0]}` })).toHaveAttribute(
      'aria-selected',
      'true',
    );
    expect(screen.getByRole('tab', { name: `Label ${ids[1]}` })).toHaveAttribute(
      'aria-selected',
      'false',
    );
    expect(screen.getByRole('tab', { name: `Label ${ids[2]}` })).toHaveAttribute(
      'aria-selected',
      'false',
    );
    expect(screen.getAllByRole('tabpanel')[0]).toHaveTextContent('Content 1');
    expect(screen.getAllByRole('tabpanel')[1]).toHaveTextContent('');
    expect(screen.getAllByRole('tabpanel')[2]).toHaveTextContent('');
  });

  test('should switch tab content when clicking on a new tab', () => {
    // arrange
    const prevTabId = ids[0];
    const newTabId = ids[1];
    // act
    render(<TestComponent tabId={prevTabId} />);
    // assert - checking ids
    const { tabId, tabContentId } = getTabIds(newTabId);
    const tab = screen.getByRole('tab', { name: `Label ${newTabId}` });
    expect(tab).toHaveAttribute('id', tabId);
    expect(screen.getAllByRole('tabpanel')[1]).toHaveAttribute('id', tabContentId);
    // act
    fireEvent.click(tab);
    // assert
    expect(screen.getByRole('tab', { name: 'Label 1' })).toHaveAttribute('aria-selected', 'false');
    expect(screen.getByRole('tab', { name: 'Label 2' })).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByRole('tab', { name: 'Label 3' })).toHaveAttribute('aria-selected', 'false');
    expect(screen.getAllByRole('tabpanel')[0]).toHaveTextContent('');
    expect(screen.getAllByRole('tabpanel')[1]).toHaveTextContent('Content 2');
    expect(screen.getAllByRole('tabpanel')[2]).toHaveTextContent('');
  });
});
