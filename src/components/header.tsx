"use client";

import { MenuProps, Menu as AntdMenu } from "antd";
import React from "react";

type MenuItem = Required<MenuProps>["items"][number];

export default function Header() {
  return (
    <div className="h-[60px] w-full fixed top-0 left-0 z-10 bg-opacity-15 backdrop-blur-lg shadow-sm flex justify-between items-center">
      <Menu />
    </div>
  );
}

function Menu() {
  const items: MenuItem[] = [
    {
      key: "home",
      label: "Home",
    },
    {
      key: "about",
      label: "About",
      children: [
        {
          key: "team",
          label: "Team",
        },
        {
          key: "careers",
          label: "Careers",
        },
      ],
    },
  ];

  const renderMenuItems = (items: MenuItem[]) => {
    return items.map((item: any) => {
      return {
        ...item,
        label: (
          <div className={"h-[60px] w-full flex items-center"}>
            {item?.label || ""}
          </div>
        ),
      };
    });
  };

  return (
    <>
      <AntdMenu
        style={{ backgroundColor: "transparent", border: "none" }}
        className={"w-full h-[60px]"}
        mode="horizontal"
        items={renderMenuItems(items)}
      />
    </>
  );
}
