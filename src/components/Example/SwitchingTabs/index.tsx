import TabsPattern from '../../Pattern/Tabs';
import { Placeholder } from '../../UI/Placeholder';
import { TabProps } from '../../UI/Tabs/Tab/Tab.types';
import styles from './styles.module.css';

export default function SwitchingTabs({ variant }: Pick<TabProps, 'variant'>) {
  return (
    <TabsPattern.Wrapper defaultTabId={getTabUniqueId('1', variant)} className={styles.w}>
      <h2 className={styles.title}>{variant} Tabs</h2>
      <Label variant={variant} />
      <TabsPattern.TabsList variant={variant} labelId={getLabelId(variant)}>
        <TabsPattern.Tab variant={variant} id={getTabUniqueId('1', variant)}>
          Emails
        </TabsPattern.Tab>
        <TabsPattern.Tab variant={variant} id={getTabUniqueId('2', variant)}>
          Files
        </TabsPattern.Tab>
        <TabsPattern.Tab variant={variant} id={getTabUniqueId('3', variant)}>
          Edits
        </TabsPattern.Tab>
        <TabsPattern.Tab variant={variant} id={getTabUniqueId('4', variant)}>
          Dashboard
        </TabsPattern.Tab>
        <TabsPattern.Tab variant={variant} id={getTabUniqueId('5', variant)}>
          Messages
        </TabsPattern.Tab>
      </TabsPattern.TabsList>
      <TabsPattern.TabContent id={getTabUniqueId('1', variant)}>
        <FakeTabContent1 />
      </TabsPattern.TabContent>
      <TabsPattern.TabContent id={getTabUniqueId('2', variant)}>
        <FakeTabContent2 />
      </TabsPattern.TabContent>
      <TabsPattern.TabContent id={getTabUniqueId('3', variant)}>
        <FakeTabContent1 />
      </TabsPattern.TabContent>
      <TabsPattern.TabContent id={getTabUniqueId('4', variant)}>
        <FakeTabContent2 />
      </TabsPattern.TabContent>
      <TabsPattern.TabContent id={getTabUniqueId('5', variant)}>
        <FakeTabContent1 />
      </TabsPattern.TabContent>
    </TabsPattern.Wrapper>
  );
}

function getTabUniqueId(id: string, variant: TabProps['variant']) {
  return `${id}-${variant}`;
}

function getLabelId(variant: TabProps['variant']) {
  return `tabs-description-${variant}`;
}

function Label({ variant }: Pick<TabProps, 'variant'>) {
  return (
    <div id={getLabelId(variant)} style={{ display: 'none' }}>
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
