declare namespace API {
  type CreateUser = {
    nickname: string;
    password: string;
    email: string;
  };

  type getApiUserIdParams = {
    id: string;
  };

  type UpdateUser = {
    /** ID 编号 */
    id: number;
    nickname: string;
    password: string;
    email: string;
  };
}
