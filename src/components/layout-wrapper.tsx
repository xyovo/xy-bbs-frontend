"use client";

import { usePathname } from "next/navigation";
import React from "react";
import Header from "./header";
import ContainerWrapper from "./container-wrapper";

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
    <div className={"pt-[60px] bg-gray-50 min-h-screen"}>
      <Header />
      <ContainerWrapper>{children}</ContainerWrapper>
    </div>
  );
}
