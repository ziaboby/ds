import TabContent from '../../TabContent';

export function Label() {
  return <>Label</>;
}

export function Wrapper({ children, id }: { children: React.ReactNode; id: string }) {
  return (
    <>
      <div role="tablist">{children}</div>
      <TabContent id={id}>&nbsp;</TabContent>
    </>
  );
}
