"use client";

import { usePathname } from "next/navigation";
import React from "react";

export default function RootLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // 检查路径，如果路径包含 "/user"，则不渲染全局布局
  if (pathname.startsWith("/user")) {
    return <>{children}</>;
  }
  return (
    <>
      <div>global layout...</div>
      {children}
    </>
  );
}
