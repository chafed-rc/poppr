// app/getting-started/layout.tsx
import React from "react";

export const metadata = {
  title: "Getting Started - Poppr",
};

const GettingStartedLayout = ({ children }: { children: React.ReactNode }) => {
  return <main>{children}</main>;
};

export default GettingStartedLayout;
