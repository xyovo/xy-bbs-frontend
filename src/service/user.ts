// @ts-ignore
/* eslint-disable */
import request from '@/utils/request';

/** 查询用户列表 GET /api/user */
export async function getApiUser(options?: { [key: string]: any }) {
  return request<API.UpdateUser[]>('/api/user', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 更新用户 PUT /api/user */
export async function putApiUser(body: API.UpdateUser, options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/user', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新增用户 POST /api/user */
export async function postApiUser(body: API.CreateUser, options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除用户 DELETE /api/user */
export async function deleteApiUser(
  body: {
    /** ID 编号 */
    id: number;
  },
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/api/user', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询用户 GET /api/user/${param0} */
export async function getApiUserId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getApiUserIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<Record<string, any>>(`/api/user/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}
