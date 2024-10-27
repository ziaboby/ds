import Tab from './Tab/Tab';
import TabContent from './TabContent/TabContent';
import TabsList from './TabsList/TabsList';

function Wrapper({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}

const Tabs = {
  Wrapper,
  TabsList,
  Tab,
  TabContent,
};

export default Tabs;
