import { createContext, useContext } from 'react';

export interface TabsContextType {
  currentTabId?: string;
  setCurrentTab: (id: string) => void;
}

export const initialState = {
  currentTabId: undefined,
  setCurrentTab: () => {},
};

const TabsContext = createContext<TabsContextType>(initialState);

export const TabsContextProvider = TabsContext.Provider;

export const useTabsContext = () => useContext(TabsContext);
