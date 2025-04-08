// app/getting-started/layout.tsx
import React from "react";

export const metadata = {
  title: "Modal Showcase - Poppr",
};

const ModalShowcaseLayout = ({ children }: { children: React.ReactNode }) => {
  return <main>{children}</main>;
};

export default ModalShowcaseLayout;
