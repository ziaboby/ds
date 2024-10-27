import TabsList from '../../UI/Tabs/TabsList';
import TabContainer from './TabContainer';
import TabContentContainer from './TabContentContainer';
import TabsContainer from './TabsContainer';
import { useTabsContext } from './TabsContext';

const TabsPattern = {
  Wrapper: TabsContainer,
  TabsList: TabsList,
  Tab: TabContainer,
  TabContent: TabContentContainer,
  useTabsContext,
};

export default TabsPattern;
