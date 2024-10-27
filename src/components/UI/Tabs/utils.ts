export function getTabIds(id: string) {
  return {
    tabId: `tab-${id}`,
    tabContentId: `tabContent-${id}`,
  };
}
