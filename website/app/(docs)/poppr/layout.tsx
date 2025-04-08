// app/getting-started/layout.tsx
import React from "react";

export const metadata = {
  title: "API - Poppr",
};

const PopprLayout = ({ children }: { children: React.ReactNode }) => {
  return <main>{children}</main>;
};

export default PopprLayout;
