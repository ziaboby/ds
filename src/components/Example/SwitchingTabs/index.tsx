import TabsPattern from '../../Pattern/Tabs';
import { Placeholder } from '../../UI/Placeholder';
import { TabProps } from '../../UI/Tabs/Tab/Tab.types';
import styles from './styles.module.css';

export default function SwitchingTabs({ variant }: Pick<TabProps, 'variant'>) {
  return (
    <TabsPattern.Wrapper defaultTabId="1" className={styles.w}>
      <Label />
      <TabsPattern.TabsList variant={variant} labelId="tabs-description">
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
      <TabsPattern.TabContent id="1">
        <FakeTabContent1 />
      </TabsPattern.TabContent>
      <TabsPattern.TabContent id="2">
        <FakeTabContent2 />
      </TabsPattern.TabContent>
      <TabsPattern.TabContent id="3">
        <FakeTabContent1 />
      </TabsPattern.TabContent>
      <TabsPattern.TabContent id="4">
        <FakeTabContent2 />
      </TabsPattern.TabContent>
      <TabsPattern.TabContent id="5">
        <FakeTabContent1 />
      </TabsPattern.TabContent>
    </TabsPattern.Wrapper>
  );
}

function Label() {
  return (
    <div id="tabs-description" style={{ display: 'none' }}>
      This is an example of a list of tabs
    </div>
  );
}

function FakeTabContent1() {
  return (
    <section className={styles.list}>
      <Placeholder size="small" />
      <Placeholder size="small" />
      <Placeholder size="small" />
      <Placeholder size="small" />
      <Placeholder size="small" />
      <Placeholder size="small" />
    </section>
  );
}

function FakeTabContent2() {
  return (
    <section className={styles.grid}>
      <Placeholder size="large" />
      <Placeholder size="large" />
      <Placeholder size="large" />
      <Placeholder size="large" />
      <Placeholder size="large" />
      <Placeholder size="large" />
    </section>
  );
}
