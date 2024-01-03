import { emptySlitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    createClientApiV1ClientsUserIdPost: build.mutation<
      CreateClientApiV1ClientsUserIdPostApiResponse,
      CreateClientApiV1ClientsUserIdPostApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/clients/${queryArg.userId}/`,
        method: "POST",
        body: queryArg.clientsCreate,
      }),
    }),
    deleteClientApiV1ClientsUserIdDelete: build.mutation<
      DeleteClientApiV1ClientsUserIdDeleteApiResponse,
      DeleteClientApiV1ClientsUserIdDeleteApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/clients/${queryArg.userId}/`,
        method: "DELETE",
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as api };
export type CreateClientApiV1ClientsUserIdPostApiResponse =
  /** status 200 Successful Response */ Clients;
export type CreateClientApiV1ClientsUserIdPostApiArg = {
  userId: number;
  clientsCreate: ClientsCreate;
};
export type DeleteClientApiV1ClientsUserIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteClientApiV1ClientsUserIdDeleteApiArg = {
  userId: number;
};
export type Clients = {
  id?: number;
  user_id?: number;
  first_name?: string;
  last_name?: string;
  country?: string;
  city?: string;
  address?: string;
  postal_code?: string;
};
export type ValidationError = {
  loc: (string | number)[];
  msg: string;
  type: string;
};
export type HttpValidationError = {
  detail?: ValidationError[];
};
export type ClientsCreate = {
  first_name: string;
  last_name: string;
  country: string;
  city: string;
  address: string;
  postal_code: string;
};
export const {
  useCreateClientApiV1ClientsUserIdPostMutation,
  useDeleteClientApiV1ClientsUserIdDeleteMutation,
} = injectedRtkApi;
