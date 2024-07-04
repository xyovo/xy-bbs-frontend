import React from "react";

export default function ContainerWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={"w-full h-fit p-4"}>
      <div className={"bg-white rounded p-4"}>{children}</div>
    </div>
  );
}
