import { getApiUser } from "@/service/user";
import React from "react";

export default async function page() {
  let data: API.UpdateUser[] = [];
  let err;
  try {
    data = await getApiUser();
  } catch (error) {
    err = "请求错误";
  }

  if (err) {
    return <div>{err}</div>;
  }

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>{item.nickname}</div>
      ))}
    </div>
  );
}
