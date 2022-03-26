import React, { ReactNode } from "react";

type TabProps = {
  label: ReactNode;
  children: ReactNode;
  icon: StaticImageData
};

const Tab = ({ children }: TabProps) => {
  return <>{children}</>;
};

export default Tab;
export type { TabProps };
