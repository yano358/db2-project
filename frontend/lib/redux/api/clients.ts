import { emptySlitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllClientsApiV1ClientsGet: build.query<
      GetAllClientsApiV1ClientsGetApiResponse,
      GetAllClientsApiV1ClientsGetApiArg
    >({
      query: () => ({ url: `/api/v1/clients` }),
    }),
    createClientApiV1ClientsPost: build.mutation<
      CreateClientApiV1ClientsPostApiResponse,
      CreateClientApiV1ClientsPostApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/clients`,
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
    getForCurrentUserApiV1ClientsgetClientsForCurrentGet: build.query<
      GetForCurrentUserApiV1ClientsgetClientsForCurrentGetApiResponse,
      GetForCurrentUserApiV1ClientsgetClientsForCurrentGetApiArg
    >({
      query: () => ({ url: `/api/v1/clientsgetClientsForCurrent` }),
    }),
    updateClientApiV1ClientsUserIdPatch: build.mutation<
      UpdateClientApiV1ClientsUserIdPatchApiResponse,
      UpdateClientApiV1ClientsUserIdPatchApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/clients/${queryArg.userId}`,
        method: "PATCH",
        body: queryArg.clientsUpdate,
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as api };
export type GetAllClientsApiV1ClientsGetApiResponse =
  /** status 200 Successful Response */ Clients[];
export type GetAllClientsApiV1ClientsGetApiArg = void;
export type CreateClientApiV1ClientsPostApiResponse =
  /** status 200 Successful Response */ Clients;
export type CreateClientApiV1ClientsPostApiArg = {
  clientsCreate: ClientsCreate;
};
export type DeleteClientApiV1ClientsUserIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteClientApiV1ClientsUserIdDeleteApiArg = {
  userId: number;
};
export type GetForCurrentUserApiV1ClientsgetClientsForCurrentGetApiResponse =
  /** status 200 Successful Response */ Clients[];
export type GetForCurrentUserApiV1ClientsgetClientsForCurrentGetApiArg = void;
export type UpdateClientApiV1ClientsUserIdPatchApiResponse =
  /** status 200 Successful Response */ Clients;
export type UpdateClientApiV1ClientsUserIdPatchApiArg = {
  userId: number;
  clientsUpdate: ClientsUpdate;
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
  user_id: number;
  first_name: string;
  last_name: string;
  country: string;
  city: string;
  address: string;
  postal_code: string;
};
export type ClientsUpdate = {
  first_name?: string;
  last_name?: string;
  country?: string;
  city?: string;
  address?: string;
  postal_code?: string;
};
export const {
  useGetAllClientsApiV1ClientsGetQuery,
  useLazyGetAllClientsApiV1ClientsGetQuery,
  useCreateClientApiV1ClientsPostMutation,
  useDeleteClientApiV1ClientsUserIdDeleteMutation,
  useGetForCurrentUserApiV1ClientsgetClientsForCurrentGetQuery,
  useLazyGetForCurrentUserApiV1ClientsgetClientsForCurrentGetQuery,
  useUpdateClientApiV1ClientsUserIdPatchMutation,
} = injectedRtkApi;
