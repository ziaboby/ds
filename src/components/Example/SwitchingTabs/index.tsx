import TabsPattern from '../../Pattern/Tabs';
import { Placeholder } from '../../UI/Placeholder';
import { TabProps } from '../../UI/Tabs/Tab/Tab.types';
import styles from './styles.module.css';

const ids = [
  ['1', 'Emails'],
  ['2', 'Files'],
  ['3', 'Edits'],
  ['4', 'Dashboard'],
  ['5', 'Messages'],
];

export default function SwitchingTabs({ variant }: Pick<TabProps, 'variant'>) {
  return (
    <TabsPattern.Wrapper defaultTabId={getTabUniqueId('1', variant)} className={styles.w}>
      <h2 className={styles.title}>{variant} Tabs</h2>
      <Label variant={variant} />
      <TabsPattern.TabsList variant={variant} labelId={getLabelId(variant)}>
        {ids.map(([id, tabName]) => (
          <TabsPattern.Tab variant={variant} id={getTabUniqueId(id, variant)}>
            {tabName}
          </TabsPattern.Tab>
        ))}
      </TabsPattern.TabsList>
      {ids.map(([id], index) => (
        <TabsPattern.TabContent id={getTabUniqueId(id, variant)}>
          {index % 2 == 0 ? <FakeTabContent1 /> : <FakeTabContent2 />}
        </TabsPattern.TabContent>
      ))}
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
