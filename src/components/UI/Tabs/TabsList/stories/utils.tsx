import Badge from '../../../Badge';
import Tab from '../../Tab';
import type { TabProps } from '../../Tab/Tab.types';

export function Sample({ variant }: Pick<TabProps, 'variant'>) {
  return (
    <>
      <Tab variant={variant} selected={true} id="1">
        Label
      </Tab>
      <Tab variant={variant} selected={false} id="2">
        Label
      </Tab>
      <Tab variant={variant} selected={false} id="3">
        Label
      </Tab>
      <Tab variant={variant} selected={false} id="4">
        Label
      </Tab>
    </>
  );
}

export function SampleWithBadge({ variant }: Pick<TabProps, 'variant'>) {
  return (
    <>
      <Tab variant={variant} selected={true} id="1">
        Emails
      </Tab>
      <Tab variant={variant} selected={false} id="2">
        Files <Badge variant="negative" label="Warning" />
      </Tab>
      <Tab variant={variant} selected={false} id="3">
        Edits
      </Tab>
      <Tab variant={variant} selected={false} id="4">
        Dashboard
      </Tab>
      <Tab variant={variant} selected={false} id="4">
        Messages
      </Tab>
    </>
  );
}

const LabelStyles = { display: 'none' };
export function Label() {
  return (
    <div id="example" style={LabelStyles}>
      This is an example of a list of tabs
    </div>
  );
}
