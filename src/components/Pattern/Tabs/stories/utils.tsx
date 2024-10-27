import TabsPattern from '..';
import type { TabProps } from '../../../UI/Tabs/Tab/Tab.types';

export function Sample({ variant }: Pick<TabProps, 'variant'>) {
  return (
    <TabsPattern.Wrapper defaultTabId="1">
      <div id="example" style={{ display: 'none' }}>
        This is an example of a list of tabs
      </div>
      <TabsPattern.TabsList variant={variant} labelId="example">
        <TabsPattern.Tab variant={variant} id="1">
          Emails
        </TabsPattern.Tab>
        <TabsPattern.Tab variant={variant} id="2">
          Files
        </TabsPattern.Tab>
        <TabsPattern.Tab variant={variant} id="3">
          Edits
        </TabsPattern.Tab>
        <TabsPattern.Tab variant={variant} id="4">
          Dashboard
        </TabsPattern.Tab>
        <TabsPattern.Tab variant={variant} id="5">
          Messages
        </TabsPattern.Tab>
      </TabsPattern.TabsList>
      <TabsPattern.TabContent id="1">Content tab 1</TabsPattern.TabContent>
      <TabsPattern.TabContent id="2">Content tab 2</TabsPattern.TabContent>
      <TabsPattern.TabContent id="3">Content tab 3</TabsPattern.TabContent>
      <TabsPattern.TabContent id="4">Content tab 4</TabsPattern.TabContent>
      <TabsPattern.TabContent id="5">Content tab 5</TabsPattern.TabContent>
    </TabsPattern.Wrapper>
  );
}
