import { emptySlitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    readUsersApiV1UsersGet: build.query<
      ReadUsersApiV1UsersGetApiResponse,
      ReadUsersApiV1UsersGetApiArg
    >({
      query: () => ({ url: `/api/v1/users` }),
    }),
    createUserApiV1UsersPost: build.mutation<
      CreateUserApiV1UsersPostApiResponse,
      CreateUserApiV1UsersPostApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/users`,
        method: "POST",
        body: queryArg.userCreate,
      }),
    }),
    readUserByEmailApiV1UsersEmailGet: build.query<
      ReadUserByEmailApiV1UsersEmailGetApiResponse,
      ReadUserByEmailApiV1UsersEmailGetApiArg
    >({
      query: (queryArg) => ({ url: `/api/v1/users${queryArg.email}` }),
    }),
    deleteUserApiV1UsersUserIdDelete: build.mutation<
      DeleteUserApiV1UsersUserIdDeleteApiResponse,
      DeleteUserApiV1UsersUserIdDeleteApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/users/${queryArg.userId}`,
        method: "DELETE",
      }),
    }),
    getCurrentUserApiV1UsersUserGet: build.query<
      GetCurrentUserApiV1UsersUserGetApiResponse,
      GetCurrentUserApiV1UsersUserGetApiArg
    >({
      query: () => ({ url: `/api/v1/users/user` }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as api };
export type ReadUsersApiV1UsersGetApiResponse =
  /** status 200 Successful Response */ User[];
export type ReadUsersApiV1UsersGetApiArg = void;
export type CreateUserApiV1UsersPostApiResponse =
  /** status 200 Successful Response */ User;
export type CreateUserApiV1UsersPostApiArg = {
  userCreate: UserCreate;
};
export type ReadUserByEmailApiV1UsersEmailGetApiResponse =
  /** status 200 Successful Response */ User;
export type ReadUserByEmailApiV1UsersEmailGetApiArg = {
  email: string;
};
export type DeleteUserApiV1UsersUserIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteUserApiV1UsersUserIdDeleteApiArg = {
  userId: number;
};
export type GetCurrentUserApiV1UsersUserGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetCurrentUserApiV1UsersUserGetApiArg = void;
export type User = {
  id?: number;
  username: string;
  email: string;
  hashed_password: string;
  is_superuser?: boolean;
  created_date?: string;
  updated_date?: string;
};
export type ValidationError = {
  loc: (string | number)[];
  msg: string;
  type: string;
};
export type HttpValidationError = {
  detail?: ValidationError[];
};
export type UserCreate = {
  email: string;
  username: string;
  password: string;
  is_superuser?: boolean;
};
export const {
  useReadUsersApiV1UsersGetQuery,
  useLazyReadUsersApiV1UsersGetQuery,
  useCreateUserApiV1UsersPostMutation,
  useReadUserByEmailApiV1UsersEmailGetQuery,
  useLazyReadUserByEmailApiV1UsersEmailGetQuery,
  useDeleteUserApiV1UsersUserIdDeleteMutation,
  useGetCurrentUserApiV1UsersUserGetQuery,
  useLazyGetCurrentUserApiV1UsersUserGetQuery,
} = injectedRtkApi;
