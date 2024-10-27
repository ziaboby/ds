import type { TabWrapperProps } from './TabWrapper.types';

export default function TabWrapper({ children, className }: TabWrapperProps) {
  return <div className={className}>{children}</div>;
}
