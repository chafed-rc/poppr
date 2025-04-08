// app/getting-started/layout.tsx
import React from "react";

export const metadata = {
  title: "Configuration - Poppr",
};

const ConfigurationLayout = ({ children }: { children: React.ReactNode }) => {
  return <main>{children}</main>;
};

export default ConfigurationLayout;
